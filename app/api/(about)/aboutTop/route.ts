export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import About from "@/models/(about)/about"
import AboutTop from "@/models/(about)/aboutTop"



import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, title2 } = await req.json()
    await connectToDB()
    await AboutTop.create({ title, title2 })
    return NextResponse.json({ message: "about Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const about = await AboutTop.find()
    return NextResponse.json({ about })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const about = await AboutTop.findByIdAndDelete(params.id)

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