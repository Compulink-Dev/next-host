import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const reports = await db.report.findMany()

        return NextResponse.json(reports, {
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

        const reportData = await db.report.create({ data })

        console.log(reportData);

        return NextResponse.json(reportData, {
            status: 201
        })

    } catch (error) {
        console.log('Error while creating', error);
        return NextResponse.json({
            message: "Failed to create report",
        }, {
            status: 500
        })
    }
}