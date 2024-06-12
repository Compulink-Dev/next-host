export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Core from "@/models/cores"

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, subtitle, imageUrl, position, link } = await req.json()
    await connectToDB()
    await Core.create({ title, subtitle, imageUrl, position, link })
    return NextResponse.json({ message: "Core Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const core = await Core.find()
    return NextResponse.json({ core })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const core = await Core.findByIdAndDelete(params.id)

        if (!core) {
            return NextResponse.json(
                {
                    message: "Core not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(core)

    } catch (error) {
        return NextResponse.json({ message: "Core error" }, { status: 400 })
    }
}