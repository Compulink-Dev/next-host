import { connectToDB } from "@/lib/connectToDB";
import Program from "@/models/(programs)/program";


import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const program = await Program.findById(params.id)

        if (!program) {
            return NextResponse.json(
                {
                    message: "program not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(program)

    } catch (error) {
        return NextResponse.json({ message: "program error" }, { status: 400 })
    }
}


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const programUpdated = await Program.findByIdAndUpdate(params.id, body)

        if (!programUpdated) {
            return NextResponse.json(
                {
                    message: "program not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(programUpdated)

    } catch (error) {
        return NextResponse.json({ message: "program error" }, { status: 400 })
    }
}


//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const program = await Program.findByIdAndDelete(params.id)

        if (!program) {
            return NextResponse.json(
                {
                    message: "program not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(program)

    } catch (error) {
        return NextResponse.json({ message: "program error" }, { status: 400 })
    }
}