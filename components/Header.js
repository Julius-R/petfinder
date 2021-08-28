import {
	chakra,
	Flex,
	useColorModeValue,
	VisuallyHidden,
	Button,
	useColorMode,
	Text
} from "@chakra-ui/react";

import { MoonIcon } from "@chakra-ui/icons";

export default function Header() {
	const { toggleColorMode } = useColorMode();
	const bg = useColorModeValue("white", "gray.800");

	return (
		<>
			<chakra.header
				pos="fixed"
				w="100%"
				zIndex={2}
				bg={bg}
				w="full"
				px={{ base: 2, sm: 4 }}
				py={4}
				shadow="md">
				<Flex
					alignItems="center"
					justifyContent="space-between"
					mx="auto">
					<Text>Pet Finders</Text>
					{/* Toggle on and off dark mode */}
					<Button size="sm" onClick={toggleColorMode}>
						<MoonIcon />
						{/* This is for screen reader purposes */}
						<VisuallyHidden>Toggle Darkmode</VisuallyHidden>
					</Button>
				</Flex>
			</chakra.header>
		</>
	);
}
