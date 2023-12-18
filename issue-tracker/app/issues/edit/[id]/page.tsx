import { notFound } from 'next/navigation'
import prisma from '@/prisma/client'
import dynamic from 'next/dynamic'
import IssueFormSkeleton from './loading'

const IssueForm = dynamic(() => import('../../_components/IssueForm'), { 
  ssr: false,
  loading: () => <IssueFormSkeleton/>
})
 
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
