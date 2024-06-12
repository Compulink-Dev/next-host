export const dynamic = "force-dynamic"
import { connectToDB } from "@/lib/connectToDB"
import Hero from "@/models/(home)/hero"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { imageUrl } = await req.json()
    await connectToDB()
    await Hero.create({ imageUrl })
    return NextResponse.json({ message: "hero Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const about = await Hero.find()
    return NextResponse.json({ about })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const about = await Hero.findByIdAndDelete(params.id)

        if (!about) {
            return NextResponse.json(
                {
                    message: "hero not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(about)

    } catch (error) {
        return NextResponse.json({ message: "hero error" }, { status: 400 })
    }
}