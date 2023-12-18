import { Box, Heading } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

export default function LoadingNewIssuePage() {
  return (
    <div className="mt-5">
      <Heading>New Issue</Heading>
      <Box className="max-w-xl space-y-3">
        <Skeleton />
        <Skeleton height="20rem" />
      </Box>
    </div>
  );
}
