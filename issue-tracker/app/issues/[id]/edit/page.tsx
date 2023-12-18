import { notFound } from 'next/navigation'
import IssueForm from '../../_components/IssueForm'
import prisma from '@/prisma/client'

interface Props {
  params: {id: string}
}

export default async function EditIssuePage({params: {id}}: Props) {
  const updatedIssue = await prisma.issue.findUnique({
    where: {id: parseInt(id)},
  })
  if (!updatedIssue) { notFound() }

  return (
    <IssueForm header="Edit Issue Page" issue={updatedIssue}/>
  )
}
