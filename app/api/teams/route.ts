import { connectToDB } from "@/lib/connectToDB";
import db from "@/lib/db";
import Team from "@/models/teams/team";
import Vacancy from "@/models/vacancy";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    await connectToDB()
    const teams = await Team.find()
    return NextResponse.json({ teams })
}


export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const newVacancy = new Team(body)
        const savedVacancy = await newVacancy.save()
        return NextResponse.json(savedVacancy)
    } catch (error) {
        return NextResponse.json({ message: "Failed to post team" }, { status: 400 })
    }
}

export async function DELETE(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id")
    await connectToDB()
    await Team.findByIdAndDelete(id)
    return NextResponse.json({ message: "Team Deleted" }, { status: 201 })
}