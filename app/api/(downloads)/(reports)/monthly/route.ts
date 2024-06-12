export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Monthly from "@/models/(downloads)/monthly"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, document, imageUrl, date } = await req.json()
    await connectToDB()
    await Monthly.create({ title, document, imageUrl, date })
    return NextResponse.json({ message: "monthly Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const monthly = await Monthly.find()
    return NextResponse.json({ monthly })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const monthly = await Monthly.findByIdAndDelete(params.id)

        if (!monthly) {
            return NextResponse.json(
                {
                    message: "monthly not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(monthly)

    } catch (error) {
        return NextResponse.json({ message: "monthly error" }, { status: 400 })
    }
}