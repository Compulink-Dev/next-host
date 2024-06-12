import { connectToDB } from "@/lib/connectToDB";
import Team from "@/models/teams/team";
import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const team = await Team.findById(params.id)

        if (!team) {
            return NextResponse.json(
                {
                    message: "Team not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(team)

    } catch (error) {
        return NextResponse.json({ message: "Team error" }, { status: 400 })
    }
}


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const teamUpdated = await Team.findByIdAndUpdate(params.id, body)

        if (!teamUpdated) {
            return NextResponse.json(
                {
                    message: "Team not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(teamUpdated)

    } catch (error) {
        return NextResponse.json({ message: "Team error" }, { status: 400 })
    }
}


//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const team = await Team.findByIdAndDelete(params.id)

        if (!team) {
            return NextResponse.json(
                {
                    message: "Team not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(team)

    } catch (error) {
        return NextResponse.json({ message: "Team error" }, { status: 400 })
    }
}