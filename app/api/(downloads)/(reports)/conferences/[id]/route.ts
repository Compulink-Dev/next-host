import { connectToDB } from "@/lib/connectToDB";
import Conference from "@/models/(downloads)/conference";


import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const conference = await Conference.findById(params.id)

        if (!conference) {
            return NextResponse.json(
                {
                    message: "Conference not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(conference)

    } catch (error) {
        return NextResponse.json({ message: "Conference error" }, { status: 400 })
    }
}


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const conferenceUpdated = await Conference.findByIdAndUpdate(params.id, body)

        if (!conferenceUpdated) {
            return NextResponse.json(
                {
                    message: "Conference not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(conferenceUpdated)

    } catch (error) {
        return NextResponse.json({ message: "Conference error" }, { status: 400 })
    }
}


//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const conference = await Conference.findByIdAndDelete(params.id)

        if (!conference) {
            return NextResponse.json(
                {
                    message: "Conference not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(conference)

    } catch (error) {
        return NextResponse.json({ message: "Conference error" }, { status: 400 })
    }
}