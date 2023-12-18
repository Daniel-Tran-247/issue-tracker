import dynamic from 'next/dynamic'
import IssueFormSkeleton from '../_components/IssueFormSkeleton'

const IssueForm = dynamic(() => import('../_components/IssueForm'), {
  ssr: false,
  loading: () => <IssueFormSkeleton />
})
export default function NewIssuePage() {
  return (
    <IssueForm header="New Issue" />
  )
}
