export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Presentation from "@/models/(downloads)/presentation"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, document, imageUrl, date } = await req.json()
    await connectToDB()
    await Presentation.create({ title, document, imageUrl, date })
    return NextResponse.json({ message: "presentation Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const presentation = await Presentation.find()
    return NextResponse.json({ presentation })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const presentation = await Presentation.findByIdAndDelete(params.id)

        if (!presentation) {
            return NextResponse.json(
                {
                    message: "presentation not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(presentation)

    } catch (error) {
        return NextResponse.json({ message: "presentation error" }, { status: 400 })
    }
}