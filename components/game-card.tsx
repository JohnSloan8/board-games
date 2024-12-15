import { Card, Flex, Avatar, Box, Text } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
}

export default function GameCard({ title, description, image }: GameCardProps) {
  return (
    <Link href={`/games/${title}`}>
      <Card size="2">
        <Flex gap="4" align="center">
          <Image
            src={`/images/${image}`}
            alt="Example Image"
            priority={true}
            width={80}
            height={80}
            className="w-24 h-auto"
          />{" "}
          <Box>
            <Text as="div" size="4" weight="bold">
              {title}
            </Text>
            <Text as="div" size="4" color="gray">
              {description}
            </Text>
          </Box>
        </Flex>
      </Card>
    </Link>
  );
}
