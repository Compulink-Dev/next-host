import { connectToDB } from "@/lib/connectToDB";
import Research from "@/models/(downloads)/research";


import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const research = await Research.findById(params.id)

        if (!research) {
            return NextResponse.json(
                {
                    message: "research not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(research)

    } catch (error) {
        return NextResponse.json({ message: "research error" }, { status: 400 })
    }
}


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const researchUpdated = await Research.findByIdAndUpdate(params.id, body)

        if (!researchUpdated) {
            return NextResponse.json(
                {
                    message: "research not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(researchUpdated)

    } catch (error) {
        return NextResponse.json({ message: "research error" }, { status: 400 })
    }
}


//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const research = await Research.findByIdAndDelete(params.id)

        if (!research) {
            return NextResponse.json(
                {
                    message: "research not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(research)

    } catch (error) {
        return NextResponse.json({ message: "research error" }, { status: 400 })
    }
}