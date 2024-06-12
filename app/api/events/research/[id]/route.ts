import db from "@/lib/db";
import { NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params: { id } }) {
    try {
        const team = await db.team.findUnique({
            where: { id },
        });
        if (!team) {
            return NextResponse.json(
                {
                    message: "Team NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(team);
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

        const updatedTeam = await db.team.update({
            where: { id },
            data
        });
        if (!updatedTeam) {
            return NextResponse.json(
                {
                    message: "Contact NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(updatedTeam);
    } catch (error) {
        console.log("Failed to update Team", error);
        return NextResponse.json(
            {
                message: "Failed to update team",
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

        await db.team.delete({
            where: { id }
        })
        return NextResponse.json({
            message: "Team deleted successfully"
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

