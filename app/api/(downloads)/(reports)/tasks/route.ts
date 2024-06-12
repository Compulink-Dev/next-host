export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Task from "@/models/(downloads)/task"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, document, imageUrl, date } = await req.json()
    await connectToDB()
    await Task.create({ title, document, imageUrl, date })
    return NextResponse.json({ message: "task Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const task = await Task.find()
    return NextResponse.json({ task })
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