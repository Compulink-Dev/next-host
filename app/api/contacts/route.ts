export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Contact from "@/models/ contact"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { email, address, telephone } = await req.json()
    await connectToDB()
    await Contact.create({ email, address, telephone })
    return NextResponse.json({ message: "about Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const about = await Contact.find()
    return NextResponse.json({ about })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const about = await Contact.findByIdAndDelete(params.id)

        if (!about) {
            return NextResponse.json(
                {
                    message: "about not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(about)

    } catch (error) {
        return NextResponse.json({ message: "about error" }, { status: 400 })
    }
}