import { Button, Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusFilter from "./IssueStatusFilter";

export default function IssueActions() {
  return (
    <div className="mt-5">
      <Heading>Issues</Heading>
      <Flex mt="5" justify="between">
        <IssueStatusFilter />
        <Link href="/issues/new">
          <Button>New Issue</Button>
        </Link>
      </Flex>
    </div>
  );
}
