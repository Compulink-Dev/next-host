export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Download from "@/models/(downloads)/download"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, document, imageUrl, date } = await req.json()
    await connectToDB()
    await Download.create({ title, document, imageUrl, date })
    return NextResponse.json({ message: "download Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const download = await Download.find()
    return NextResponse.json({ download })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const download = await Download.findByIdAndDelete(params.id)

        if (!download) {
            return NextResponse.json(
                {
                    message: "download not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(download)

    } catch (error) {
        return NextResponse.json({ message: "download error" }, { status: 400 })
    }
}