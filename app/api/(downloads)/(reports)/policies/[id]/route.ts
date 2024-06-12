import { connectToDB } from "@/lib/connectToDB";
import Policy from "@/models/(downloads)/policy";


import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const policy = await Policy.findById(params.id)

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


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const policyUpdated = await Policy.findByIdAndUpdate(params.id, body)

        if (!policyUpdated) {
            return NextResponse.json(
                {
                    message: "policy not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(policyUpdated)

    } catch (error) {
        return NextResponse.json({ message: "policy error" }, { status: 400 })
    }
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