import { connectToDB } from "@/lib/connectToDB";
import Adhoc from "@/models/(programs)/adhoc";


import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const adhoc = await Adhoc.findById(params.id)

        if (!adhoc) {
            return NextResponse.json(
                {
                    message: "Adhoc not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(adhoc)

    } catch (error) {
        return NextResponse.json({ message: "Adhoc error" }, { status: 400 })
    }
}


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const adhocUpdated = await Adhoc.findByIdAndUpdate(params.id, body)

        if (!adhocUpdated) {
            return NextResponse.json(
                {
                    message: "Adhoc not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(adhocUpdated)

    } catch (error) {
        return NextResponse.json({ message: "Adhoc error" }, { status: 400 })
    }
}


//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const adhoc = await Adhoc.findByIdAndDelete(params.id)

        if (!adhoc) {
            return NextResponse.json(
                {
                    message: "Adhoc not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(Adhoc)

    } catch (error) {
        return NextResponse.json({ message: "Adhoc error" }, { status: 400 })
    }
}