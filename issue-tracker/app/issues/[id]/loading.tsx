import { Box, Card, Flex } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";  

export default function LoadingIssueDetailPage() {
  return (
    <Box className="mt-5 max-w-xl">
      <Skeleton />
      <Flex className="space-x-3" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose mt-5">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
}
