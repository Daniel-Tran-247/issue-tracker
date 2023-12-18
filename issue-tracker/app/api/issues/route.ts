import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { issueSchema } from "../../validationSchema";

export async function GET(request: NextRequest) {
    const issues = await prisma.issue.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
    return NextResponse.json(issues, {status: 200})
}


export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = issueSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({errors: validation.error.format()}, {status: 400})
    } 

    const newIssue = await prisma.issue.create({
        data: {
            title: body.title,
            description: body.description,
        }
    })
    return NextResponse.json(newIssue, {status: 201})
}