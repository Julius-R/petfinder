import {
	Box,
	chakra,
	Container,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden
} from "@chakra-ui/react";

export default function Footer() {
	return (
		<Box pos="fixed" bottom={0} w="full" px={{ base: 2, sm: 4 }} py={4}>
			<Text>© 2021 Pet Finders. All rights reserved</Text>
		</Box>
	);
}
