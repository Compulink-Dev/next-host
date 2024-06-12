import { connectToDB } from "@/lib/connectToDB";
import Vacancy from "@/models/vacancy";
import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const vacancy = await Vacancy.findById(params.id)

        if (!vacancy) {
            return NextResponse.json(
                {
                    message: "Vacant not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(vacancy)

    } catch (error) {
        return NextResponse.json({ message: "Vacancy error" }, { status: 400 })
    }
}


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const vacancyUpdated = await Vacancy.findByIdAndUpdate(params.id, body)

        if (!vacancyUpdated) {
            return NextResponse.json(
                {
                    message: "Vacant not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(vacancyUpdated)

    } catch (error) {
        return NextResponse.json({ message: "Vacancy error" }, { status: 400 })
    }
}


//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const vacancy = await Vacancy.findByIdAndDelete(params.id)

        if (!vacancy) {
            return NextResponse.json(
                {
                    message: "Vacant not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(vacancy)

    } catch (error) {
        return NextResponse.json({ message: "Vacancy error" }, { status: 400 })
    }
}