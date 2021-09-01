//  Page for displaying form to submit a post
// TODO Add react form, implement validation, add s3 bucket api

import { Container, Stack, Flex, Box, Text, Button } from "@chakra-ui/react";
import Layout from "../components/Layout";

export default function Post() {
	return (
		<Layout>
			<Container maxW={"7xl"} py={{ base: 20, md: 28 }}>
				<Text>Post lost pet here</Text>
			</Container>
		</Layout>
	);
}
