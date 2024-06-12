import { connectToDB } from "@/lib/connectToDB";
import Core from "@/models/cores";

import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const core = await Core.findById(params.id)

        if (!core) {
            return NextResponse.json(
                {
                    message: "Core not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(core)

    } catch (error) {
        return NextResponse.json({ message: "Core error" }, { status: 400 })
    }
}


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const coreUpdated = await Core.findByIdAndUpdate(params.id, body)

        if (!coreUpdated) {
            return NextResponse.json(
                {
                    message: "Core not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(coreUpdated)

    } catch (error) {
        return NextResponse.json({ message: "Core error" }, { status: 400 })
    }
}


//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const core = await Core.findByIdAndDelete(params.id)

        if (!core) {
            return NextResponse.json(
                {
                    message: "Core not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(core)

    } catch (error) {
        return NextResponse.json({ message: "Core error" }, { status: 400 })
    }
}