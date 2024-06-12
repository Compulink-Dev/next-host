export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Chair from "@/models/chairs"

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, subtitle, imageUrl, position, link } = await req.json()
    await connectToDB()
    await Chair.create({ title, subtitle, imageUrl, position, link })
    return NextResponse.json({ message: "Chair Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const chair = await Chair.find()
    return NextResponse.json({ chair })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const chair = await Chair.findByIdAndDelete(params.id)

        if (!chair) {
            return NextResponse.json(
                {
                    message: "chair not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(chair)

    } catch (error) {
        return NextResponse.json({ message: "chair error" }, { status: 400 })
    }
}