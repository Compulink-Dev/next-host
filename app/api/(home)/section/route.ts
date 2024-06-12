export const dynamic = "force-dynamic"
import { connectToDB } from "@/lib/connectToDB"
import Hero from "@/models/(home)/hero"
import Section from "@/models/(home)/section"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, title2, imageUrl } = await req.json()
    await connectToDB()
    await Section.create({ title, title2, imageUrl })
    return NextResponse.json({ message: "Section Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const section = await Section.find()
    return NextResponse.json({ section })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const section = await Section.findByIdAndDelete(params.id)

        if (!section) {
            return NextResponse.json(
                {
                    message: "Section not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(section)

    } catch (error) {
        return NextResponse.json({ message: "Section error" }, { status: 400 })
    }
}