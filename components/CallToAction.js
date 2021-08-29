import React from "react";
import { Link } from "next/link";
import { useRouter } from "next/router";
import {
	chakra,
	Box,
	Text,
	Flex,
	Button,
	useColorModeValue,
	Icon,
	Stack
} from "@chakra-ui/react";
import { Search2Icon, WarningIcon } from "@chakra-ui/icons";

export default function CallToAction() {
	const router = useRouter();
	const Feature = (props) => {
		return (
			<Flex>
				<Flex shrink={0}>
					<Flex
						alignItems="center"
						justifyContent="center"
						h={12}
						w={12}
						rounded="md"
						color="white">
						<Icon
							boxSize={6}
							aria-hidden="true"
							color={useColorModeValue("gray.900", "white")}>
							{props.icon}
						</Icon>
					</Flex>
				</Flex>
				<Box ml={4}>
					<chakra.dt
						fontSize="lg"
						fontWeight="medium"
						lineHeight="6"
						color={useColorModeValue("gray.900")}>
						{props.title}
					</chakra.dt>
					<chakra.dd
						mt={2}
						color={useColorModeValue("gray.500", "gray.400")}>
						{props.children}
					</chakra.dd>
				</Box>
			</Flex>
		);
	};
	return (
		<Flex
			bg={useColorModeValue("#F9FAFB", "gray.600")}
			p={20}
			w="full"
			justifyContent="center"
			alignItems="center">
			<Box
				py={12}
				w="full"
				bg={useColorModeValue("white", "gray.800")}
				rounded="xl">
				<Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
					<Box textAlign={{ lg: "center" }}>
						<chakra.h2
							color={useColorModeValue("brand.600")}
							fontWeight="semibold"
							textTransform="uppercase"
							letterSpacing="wide">
							Who We Are
						</chakra.h2>
						<chakra.p
							mt={2}
							fontSize={{ base: "3xl", sm: "4xl" }}
							lineHeight="8"
							fontWeight="extrabold"
							letterSpacing="tight"
							color={useColorModeValue("gray.900")}>
							We Are Pet Finders
						</chakra.p>
						<chakra.p
							mt={4}
							maxW="2xl"
							fontSize="xl"
							mx={{ lg: "auto" }}
							color={useColorModeValue("gray.500", "gray.400")}>
							Our goal is to help families find their precious
							loved one. To that end, we have created a platform
							that allows individuals to post missing pets, and
							for those who've lost their pet to search for them.
						</chakra.p>
					</Box>

					<Box mt={10}>
						<Stack
							spacing={{ base: 10, md: 0 }}
							display={{ md: "grid" }}
							gridTemplateColumns={{ md: "repeat(2,1fr)" }}
							gridColumnGap={{ md: 8 }}
							gridRowGap={{ md: 10 }}>
							<Feature title="Lost a pet?" icon={<Search2Icon />}>
								<Text>
									All posts are saved in our database and made
									available to you. We have a friendly search
									page that lets you customize and filter by
									area and type of pet to find your missing
									pet.
								</Text>
								<Button
									onClick={() => router.push("/search")}
									rounded={"md"}
									size={"sm"}
									fontWeight={"normal"}
									px={4}
									mt={2}
									colorScheme={"red"}
									bg={"red.400"}
									_hover={{ bg: "red.500" }}>
									{" "}
									Search
								</Button>
							</Feature>

							<Feature
								title="Found a pet?"
								icon={<WarningIcon />}>
								<Text>
									Perfect! By following the link below, you
									can create a post as well as upload a photo
									of the missing pet. You are also able to add
									a description of the pet as well as the
									current location the pet can be found and
									contact info.
								</Text>
								<Button
									onClick={() => router.push("/post")}
									rounded={"md"}
									size={"sm"}
									mt={2}
									fontWeight={"normal"}
									px={4}>
									Create a post
								</Button>
							</Feature>
						</Stack>
					</Box>
				</Box>
			</Box>
		</Flex>
	);
}
