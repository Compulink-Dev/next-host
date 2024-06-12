import { connectToDB } from "@/lib/connectToDB";
import Chair from "@/models/chairs";

import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const chair = await Chair.findById(params.id)

        if (!chair) {
            return NextResponse.json(
                {
                    message: "Chair not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(chair)

    } catch (error) {
        return NextResponse.json({ message: "Chair error" }, { status: 400 })
    }
}


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const chairUpdated = await Chair.findByIdAndUpdate(params.id, body)

        if (!chairUpdated) {
            return NextResponse.json(
                {
                    message: "Chair not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(chairUpdated)

    } catch (error) {
        return NextResponse.json({ message: "Chair error" }, { status: 400 })
    }
}


//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const chair = await Chair.findByIdAndDelete(params.id)

        if (!chair) {
            return NextResponse.json(
                {
                    message: "Chair not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(chair)

    } catch (error) {
        return NextResponse.json({ message: "Chair error" }, { status: 400 })
    }
}