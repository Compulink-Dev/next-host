import { connectToDB } from "@/lib/connectToDB";
import Download from "@/models/(downloads)/download";


import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const download = await Download.findById(params.id)

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


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const downloadUpdated = await Download.findByIdAndUpdate(params.id, body)

        if (!downloadUpdated) {
            return NextResponse.json(
                {
                    message: "download not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(downloadUpdated)

    } catch (error) {
        return NextResponse.json({ message: "download error" }, { status: 400 })
    }
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