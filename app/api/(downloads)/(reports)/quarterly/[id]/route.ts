import { connectToDB } from "@/lib/connectToDB";
import Quarterly from "@/models/(downloads)/quarterly";


import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const quarterly = await Quarterly.findById(params.id)

        if (!quarterly) {
            return NextResponse.json(
                {
                    message: "quarterly not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(quarterly)

    } catch (error) {
        return NextResponse.json({ message: "quarterly error" }, { status: 400 })
    }
}


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const quarterlyUpdated = await Quarterly.findByIdAndUpdate(params.id, body)

        if (!quarterlyUpdated) {
            return NextResponse.json(
                {
                    message: "quarterly not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(quarterlyUpdated)

    } catch (error) {
        return NextResponse.json({ message: "quarterly error" }, { status: 400 })
    }
}


//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const quarterly = await Quarterly.findByIdAndDelete(params.id)

        if (!quarterly) {
            return NextResponse.json(
                {
                    message: "quarterly not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(quarterly)

    } catch (error) {
        return NextResponse.json({ message: "quarterly error" }, { status: 400 })
    }
}