import db from "@/lib/db";
import { NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params: { id } }) {
    try {
        const event = await db.event.findUnique({
            where: { id },
        });
        if (!event) {
            return NextResponse.json(
                {
                    message: "Event NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(event);
    } catch (error) {
        console.log("Failed to fetch Event", error);
        return NextResponse.json(
            {
                message: "Failed to fetch event",
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

        const updatedEvent = await db.event.update({
            where: { id },
            data
        });
        if (!updatedEvent) {
            return NextResponse.json(
                {
                    message: "Event NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(updatedEvent);
    } catch (error) {
        console.log("Failed to update event", error);
        return NextResponse.json(
            {
                message: "Failed to update event",
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

        await db.event.delete({
            where: { id }
        })
        return NextResponse.json({
            message: "Event deleted successfully"
        })
    } catch (error) {
        console.log('Error while deleting', error);
        return NextResponse.json({
            message: "Failed to delete event",
        }, {
            status: 500
        })
    }
}

