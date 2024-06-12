export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import TaskForce from "@/models/(programs)/taskforce"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, description, imageUrl } = await req.json()
    await connectToDB()
    await TaskForce.create({ title, description, imageUrl })
    return NextResponse.json({ message: "taskForce program Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const taskForce = await TaskForce.find()
    return NextResponse.json({ taskForce })
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