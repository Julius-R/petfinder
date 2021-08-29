import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
	return (
		<Box
			bg={useColorModeValue("white", "gray.800")}
			pos={{ md: "fixed" }}
			bottom={0}
			w="full"
			px={{ base: 2, sm: 4 }}
			py={4}>
			<Text>© 2021 Pet Finders. All rights reserved</Text>
		</Box>
	);
}
