import { Button, Heading } from "@radix-ui/themes";
import Link from "next/link";

export default function IssueActions() {
  return (
    <div className="mt-5">
      <Heading>Issues</Heading>
      <div className="mb-5 mt-5">
        <Link href="/issues/new">
          <Button>New Issue</Button>
        </Link>
      </div>
    </div>
  );
}
