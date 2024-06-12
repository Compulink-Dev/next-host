export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Quarterly from "@/models/(downloads)/quarterly"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, document, imageUrl, date } = await req.json()
    await connectToDB()
    await Quarterly.create({ title, document, imageUrl, date })
    return NextResponse.json({ message: "quarterly Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const quarterly = await Quarterly.find()
    return NextResponse.json({ quarterly })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const quarterly = await Quarterly.findByIdAndDelete(params.id)

        if (!quarterly) {
            return NextResponse.json(
                {
                    message: "quarterly not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(quarterly)

    } catch (error) {
        return NextResponse.json({ message: "quarterly error" }, { status: 400 })
    }
}