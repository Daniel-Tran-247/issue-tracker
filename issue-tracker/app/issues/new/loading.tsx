import { Heading } from "@radix-ui/themes";
import IssueFormSkeleton from "../_components/IssueFormSkeleton";

export default function LoadingNewIssuePage() {
  return (
    <div className="mt-5">
      <Heading>New Issue</Heading>
      <IssueFormSkeleton />
    </div>
  );
}
