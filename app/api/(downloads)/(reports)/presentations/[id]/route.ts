import { connectToDB } from "@/lib/connectToDB";
import Presentation from "@/models/(downloads)/presentation";


import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const presentation = await Presentation.findById(params.id)

        if (!presentation) {
            return NextResponse.json(
                {
                    message: "presentation not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(presentation)

    } catch (error) {
        return NextResponse.json({ message: "presentation error" }, { status: 400 })
    }
}


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const presentationUpdated = await Presentation.findByIdAndUpdate(params.id, body)

        if (!presentationUpdated) {
            return NextResponse.json(
                {
                    message: "presentation not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(presentationUpdated)

    } catch (error) {
        return NextResponse.json({ message: "presentation error" }, { status: 400 })
    }
}


//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const presentation = await Presentation.findByIdAndDelete(params.id)

        if (!presentation) {
            return NextResponse.json(
                {
                    message: "presentation not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(presentation)

    } catch (error) {
        return NextResponse.json({ message: "presentation error" }, { status: 400 })
    }
}