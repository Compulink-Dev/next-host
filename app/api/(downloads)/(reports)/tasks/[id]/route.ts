import { connectToDB } from "@/lib/connectToDB";
import Task from "@/models/(downloads)/task";


import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const task = await Task.findById(params.id)

        if (!task) {
            return NextResponse.json(
                {
                    message: "task not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(task)

    } catch (error) {
        return NextResponse.json({ message: "task error" }, { status: 400 })
    }
}


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const taskUpdated = await Task.findByIdAndUpdate(params.id, body)

        if (!taskUpdated) {
            return NextResponse.json(
                {
                    message: "task not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(taskUpdated)

    } catch (error) {
        return NextResponse.json({ message: "task error" }, { status: 400 })
    }
}


//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const task = await Task.findByIdAndDelete(params.id)

        if (!task) {
            return NextResponse.json(
                {
                    message: "task not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(task)

    } catch (error) {
        return NextResponse.json({ message: "task error" }, { status: 400 })
    }
}