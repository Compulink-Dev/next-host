export const dynamic = "force-dynamic"
import { connectToDB } from "@/lib/connectToDB"
import Hero from "@/models/(home)/hero"
import Service from "@/models/(home)/service"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, imageUrl } = await req.json()
    await connectToDB()
    await Service.create({ imageUrl })
    return NextResponse.json({ message: "Service Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const about = await Service.find()
    return NextResponse.json({ about })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const about = await Service.findByIdAndDelete(params.id)

        if (!about) {
            return NextResponse.json(
                {
                    message: "Service not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(about)

    } catch (error) {
        return NextResponse.json({ message: "Service error" }, { status: 400 })
    }
}