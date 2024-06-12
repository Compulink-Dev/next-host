import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const teams = await db.team.findMany()

        return NextResponse.json(teams, {
            status: 201
        })
    } catch (error) {
        console.log('Error while fetching', error);
        return NextResponse.json({
            message: "Failed to fetch member",
        }, {
            status: 500
        })
    }
}

export async function POST(request: Request) {
    try {
        const { title, position, link, image } = await request.json()
        const data = { title, position, link, image }

        const teamData = await db.team.create({ data })

        console.log(teamData);

        return NextResponse.json(teamData, {
            status: 201
        })

    } catch (error) {
        console.log('Error while creating', error);
        return NextResponse.json({
            message: "Failed to create member",
        }, {
            status: 500
        })
    }
}