import { connectToDB } from "@/lib/connectToDB";
import TaskForce from "@/models/(programs)/taskforce";


import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const taskForce = await TaskForce.findById(params.id)

        if (!taskForce) {
            return NextResponse.json(
                {
                    message: "taskForce not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(taskForce)

    } catch (error) {
        return NextResponse.json({ message: "taskForce error" }, { status: 400 })
    }
}


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const taskForceUpdated = await TaskForce.findByIdAndUpdate(params.id, body)

        if (!taskForceUpdated) {
            return NextResponse.json(
                {
                    message: "taskForce not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(taskForceUpdated)

    } catch (error) {
        return NextResponse.json({ message: "taskForce error" }, { status: 400 })
    }
}


//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const taskForce = await TaskForce.findByIdAndDelete(params.id)

        if (!taskForce) {
            return NextResponse.json(
                {
                    message: "taskForce not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(taskForce)

    } catch (error) {
        return NextResponse.json({ message: "taskForce error" }, { status: 400 })
    }
}