export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Adhoc from "@/models/(programs)/adhoc"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, description, imageUrl } = await req.json()
    await connectToDB()
    await Adhoc.create({ title, description, imageUrl })
    return NextResponse.json({ message: "Adhoc program Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const adhoc = await Adhoc.find()
    return NextResponse.json({ adhoc })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const adhoc = await Adhoc.findByIdAndDelete(params.id)

        if (!adhoc) {
            return NextResponse.json(
                {
                    message: "adhoc not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(adhoc)

    } catch (error) {
        return NextResponse.json({ message: "adhoc error" }, { status: 400 })
    }
}