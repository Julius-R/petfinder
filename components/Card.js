import React from "react";
import { chakra, Box, Image, Flex, useColorModeValue } from "@chakra-ui/react";

export default function Card() {
	return (
		<Box
			maxW="xs"
			mx="auto"
			bg={useColorModeValue("white", "gray.800")}
			shadow="lg"
			rounded="lg">
			<Box px={4} py={2}>
				<chakra.h1
					color={useColorModeValue("gray.800", "white")}
					fontWeight="bold"
					fontSize="3xl"
					textTransform="uppercase">
					Pet Type
				</chakra.h1>
				<chakra.p mt={1} fontSize="sm">
					Description
				</chakra.p>
			</Box>

			<Image
				h={48}
				w="full"
				fit="cover"
				mt={2}
				src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
				alt="NIKE AIR"
			/>

			<Flex
				alignItems="center"
				justifyContent="space-between"
				px={4}
				py={2}
				roundedBottom="lg">
				<chakra.h1 fontWeight="bold" fontSize="lg">
					Zip Code
				</chakra.h1>
				<chakra.button
					px={2}
					py={1}
					bg="white"
					fontSize="xs"
					color="gray.900"
					fontWeight="bold"
					rounded="lg"
					textTransform="uppercase"
					_hover={{
						bg: "gray.200"
					}}
					_focus={{
						bg: "gray.400"
					}}>
					View More
				</chakra.button>
			</Flex>
		</Box>
	);
}
