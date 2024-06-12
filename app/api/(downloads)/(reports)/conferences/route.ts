export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Conference from "@/models/(downloads)/conference"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, document, imageUrl, date } = await req.json()
    await connectToDB()
    await Conference.create({ title, document, imageUrl, date })
    return NextResponse.json({ message: "Conference Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const conference = await Conference.find()
    return NextResponse.json({ conference })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const conference = await Conference.findByIdAndDelete(params.id)

        if (!Conference) {
            return NextResponse.json(
                {
                    message: "Conference not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(conference)

    } catch (error) {
        return NextResponse.json({ message: "Conference error" }, { status: 400 })
    }
}