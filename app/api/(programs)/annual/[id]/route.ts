import { connectToDB } from "@/lib/connectToDB";
import Annual from "@/models/(programs)/annual";


import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const annual = await Annual.findById(params.id)

        if (!annual) {
            return NextResponse.json(
                {
                    message: "annual not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(annual)

    } catch (error) {
        return NextResponse.json({ message: "annual error" }, { status: 400 })
    }
}


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const annualUpdated = await Annual.findByIdAndUpdate(params.id, body)

        if (!annualUpdated) {
            return NextResponse.json(
                {
                    message: "annual not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(annualUpdated)

    } catch (error) {
        return NextResponse.json({ message: "annual error" }, { status: 400 })
    }
}


//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const annual = await Annual.findByIdAndDelete(params.id)

        if (!annual) {
            return NextResponse.json(
                {
                    message: "annual not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(annual)

    } catch (error) {
        return NextResponse.json({ message: "annual error" }, { status: 400 })
    }
}