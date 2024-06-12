export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Research from "@/models/(downloads)/research"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, document, imageUrl, date } = await req.json()
    await connectToDB()
    await Research.create({ title, document, imageUrl, date })
    return NextResponse.json({ message: "research Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const research = await Research.find()
    return NextResponse.json({ research })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const research = await Research.findByIdAndDelete(params.id)

        if (!research) {
            return NextResponse.json(
                {
                    message: "research not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(research)

    } catch (error) {
        return NextResponse.json({ message: "research error" }, { status: 400 })
    }
}