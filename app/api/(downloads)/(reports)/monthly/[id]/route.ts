import { connectToDB } from "@/lib/connectToDB";
import Monthly from "@/models/(downloads)/monthly";


import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const monthly = await Monthly.findById(params.id)

        if (!monthly) {
            return NextResponse.json(
                {
                    message: "monthly not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(monthly)

    } catch (error) {
        return NextResponse.json({ message: "monthly error" }, { status: 400 })
    }
}


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const monthlyUpdated = await Monthly.findByIdAndUpdate(params.id, body)

        if (!monthlyUpdated) {
            return NextResponse.json(
                {
                    message: "monthly not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(monthlyUpdated)

    } catch (error) {
        return NextResponse.json({ message: "monthly error" }, { status: 400 })
    }
}


//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const monthly = await Monthly.findByIdAndDelete(params.id)

        if (!monthly) {
            return NextResponse.json(
                {
                    message: "monthly not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(monthly)

    } catch (error) {
        return NextResponse.json({ message: "monthly error" }, { status: 400 })
    }
}