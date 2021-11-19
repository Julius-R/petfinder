//  Page for displaying form to submit a post
// TODO  add s3 bucket api

import {
	Container,
	FormControl,
	Textarea,
	FormLabel,
	Input,
	Select,
	Text,
	Button,
	useToast
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function Post() {
	const toast = useToast();
	const router = useRouter();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm();
	const onSubmit = async (values) => {
		console.log(values);
		if (isNaN(values.location)) {
			toast({
				description: "Please enter a valid zip code",
				status: "error",
				duration: 9000,
				isClosable: true
			});
			return;
		}
		// API Call

		// await router.push("/");
	};
	const onCancel = () => {
		router.push("/");
	};
	return (
		<Layout>
			<Container maxW={"7xl"} py={{ base: 20, md: 28 }}>
				<Text mb={5}>Post lost pet here</Text>
				<form
					action="#"
					method="POST"
					onSubmit={handleSubmit(onSubmit)}>
					<FormControl id="image" isRequired mb={3}>
						<FormLabel>Upload Image</FormLabel>
						<input
							type="file"
							{...register("image", {
								required: true
							})}
							id="image"
							name="image"
						/>
					</FormControl>
					<FormControl id="category" isRequired>
						<FormLabel as="label">Pet Type</FormLabel>
						<Select
							placeholder="Select Category"
							variant="filled"
							size="lg"
							{...register("category", { required: true })}
							id="category"
							name="category"
							required
							mb={3}>
							<option value="Dog">Dog</option>
							<option value="Cat">Cat</option>
							<option value="OTHER">OTHER</option>
						</Select>
					</FormControl>
					<FormControl id="description" isRequired>
						<FormLabel>Description</FormLabel>
						<Textarea
							variant="filled"
							size="lg"
							{...register("description", { required: true })}
							id="description"
							name="description"
							type="description"
							required
							placeholder="Brief description"
							mb={3}
						/>
					</FormControl>
					<FormControl id="location" isRequired>
						<FormLabel>Location</FormLabel>
						<Input
							variant="filled"
							size="lg"
							{...register("location", {
								required: true
							})}
							id="location"
							name="location"
							required
							placeholder="Please Enter Zipcode"
							mb={3}
						/>
					</FormControl>
					<FormControl id="contactInfo" isRequired>
						<FormLabel>Contact Info</FormLabel>
						<Textarea
							variant="filled"
							size="lg"
							{...register("contactInfo", { required: true })}
							id="description"
							name="contactInfo"
							type="contactInfo"
							required
							placeholder="How can you be reached?"
							mb={3}
						/>
					</FormControl>
					<Button
						isFullWidth={false}
						type="submit"
						px={24}
						mb={3}
						mr={3}
						colorScheme="green">
						Submit Post
					</Button>
					<Button
						onClick={onCancel}
						isFullWidth={false}
						type="submit"
						px={24}
						mb={3}
						colorScheme="red">
						Cancel Post
					</Button>
				</form>
			</Container>
		</Layout>
	);
}
