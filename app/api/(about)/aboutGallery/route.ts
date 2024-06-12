export const dynamic = "force-dynamic"
import { connectToDB } from "@/lib/connectToDB"
import AboutGallery from "@/models/(about)/aboutGallery"



import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, imageUrl } = await req.json()
    await connectToDB()
    await AboutGallery.create({ title, imageUrl })
    return NextResponse.json({ message: "about Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const about = await AboutGallery.find()
    return NextResponse.json({ about })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const about = await AboutGallery.findByIdAndDelete(params.id)

        if (!about) {
            return NextResponse.json(
                {
                    message: "about not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(about)

    } catch (error) {
        return NextResponse.json({ message: "about error" }, { status: 400 })
    }
}