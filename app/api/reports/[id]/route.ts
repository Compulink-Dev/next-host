import db from "@/lib/db";
import { NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params: { id } }) {
    try {
        const report = await db.report.findUnique({
            where: { id },
        });
        if (!report) {
            return NextResponse.json(
                {
                    message: "Report NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(report);
    } catch (error) {
        console.log("Failed to fetch Contact", error);
        return NextResponse.json(
            {
                message: "Failed to fetch contact",
            },
            {
                status: 500,
            }
        );
    }
}


//@ts-ignore
export async function PATCH(request, { params: { id } }) {
    try {
        const { title, position, link, image } = await request.json()
        const data = { title, position, link, image }

        const updatedreport = await db.report.update({
            where: { id },
            data
        });
        if (!updatedreport) {
            return NextResponse.json(
                {
                    message: "Contact NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(updatedreport);
    } catch (error) {
        console.log("Failed to update report", error);
        return NextResponse.json(
            {
                message: "Failed to update report",
            },
            {
                status: 500,
            }
        );
    }
}

//@ts-ignore
export async function DELETE(request: Request, { params: { id } }) {
    try {

        await db.report.delete({
            where: { id }
        })
        return NextResponse.json({
            message: "report deleted successfully"
        })
    } catch (error) {
        console.log('Error while deleting', error);
        return NextResponse.json({
            message: "Failed to delete member",
        }, {
            status: 500
        })
    }
}

