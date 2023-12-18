import { issueSchema } from "@/app/validationSchema";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import delay from "delay";

export async function PATCH(
    request: NextRequest, 
    {params: {id}}: {params: {id: string}}) {
    const body = await request.json()
    const validation = issueSchema.safeParse(body);

    if(!validation.success) {
        return NextResponse.json(validation.error.format(), {status: 400})
    }
    
    const issue = await prisma.issue.findUnique({
        where: {id: parseInt(id)},
    })

    if(!issue) {
        return NextResponse.json({error: "Invalid Issue"}, {status: 400})
    }

    const updatedIssue = await prisma.issue.update({
        where: {id: parseInt(id)},
        data: {
            title: body.title,
            description: body.description,
        }
    })

    return NextResponse.json(updatedIssue, {status: 200})
} 


export async function DELETE(request: NextRequest, {params: {id}}: {params: {id: string}}) {
    const issue = await prisma.issue.findUnique({
        where: {id: parseInt(id)},
    })

    if(!issue) {
        return NextResponse.json({error: "Invalid Issue"}, {status: 404})
    }

    await delay(2000);
    
    const deletedIssue = await prisma.issue.delete({
        where: {id: issue.id},
    })

    return NextResponse.json(deletedIssue, {status: 200})
}