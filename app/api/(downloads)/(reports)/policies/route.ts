export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Policy from "@/models/(downloads)/policy"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, document, imageUrl, date } = await req.json()
    await connectToDB()
    await Policy.create({ title, document, imageUrl, date })
    return NextResponse.json({ message: "policy Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const policy = await Policy.find()
    return NextResponse.json({ policy })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const policy = await Policy.findByIdAndDelete(params.id)

        if (!policy) {
            return NextResponse.json(
                {
                    message: "policy not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(policy)

    } catch (error) {
        return NextResponse.json({ message: "policy error" }, { status: 400 })
    }
}