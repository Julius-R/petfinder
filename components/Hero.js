import {
	Container,
	Stack,
	Flex,
	Box,
	Heading,
	Text,
	Button,
	Image
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Hero() {
	// Since the Chakra Buttons have to be buttons, we need to use the router to navigate to the correct page
	const router = useRouter();
	return (
		<Container maxW={"7xl"}>
			<Stack
				align={"center"}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 20, md: 28 }}
				direction={{ base: "column", md: "row" }}>
				<Stack flex={1} spacing={{ base: 5, md: 10 }}>
					<Heading
						lineHeight={1.1}
						fontWeight={600}
						fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
						<Text
							as={"span"}
							position={"relative"}
							_after={{
								content: "''",
								width: "full",
								height: "30%",
								position: "absolute",
								bottom: 1,
								left: 0,
								bg: "red.400",
								zIndex: -1
							}}>
							Pet Finders
						</Text>
						<br />
						<Text as={"span"} color={"red.400"}>
							Reuniting Families One Paw At A Time
						</Text>
					</Heading>
					<Text color={"gray.500"}>
						Our pets are family. Sometimes our precious loved ones
						go missing. Our job is to bridge the gaps and help
						reunite families. Whether you lost a pet, or you found a
						pet, we are here to help.
					</Text>
					<Stack
						spacing={{ base: 4, sm: 6 }}
						direction={{ base: "column", sm: "row" }}>
						<Button
							onClick={() => router.push("/search")}
							rounded={"full"}
							size={"lg"}
							fontWeight={"normal"}
							px={6}
							colorScheme={"red"}
							bg={"red.400"}
							_hover={{ bg: "red.500" }}>
							Lost A Pet?
						</Button>
						<Button
							onClick={() => router.push("/post")}
							rounded={"full"}
							size={"lg"}
							fontWeight={"normal"}
							px={6}>
							Found A Pet?
						</Button>
					</Stack>
				</Stack>
				<Flex
					flex={1}
					justify={"center"}
					align={"center"}
					position={"relative"}
					w={"full"}>
					<Box
						position={"relative"}
						height={"300px"}
						rounded={"2xl"}
						boxShadow={"2xl"}
						width={"full"}
						overflow={"hidden"}>
						<Image
							alt={"Credits to https://unsplash.com/@jamie452"}
							fit={"cover"}
							align={"center"}
							w={"100%"}
							h={"200%"}
							src={
								"https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80"
							}
						/>
					</Box>
				</Flex>
			</Stack>
		</Container>
	);
}
