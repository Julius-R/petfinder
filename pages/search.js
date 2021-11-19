import { useState, useEffect } from "react";
import {
	Container,
	Box,
	FormControl,
	Textarea,
	FormLabel,
	Input,
	Select,
	Text,
	Flex,
	Button
} from "@chakra-ui/react";
import Card from "../components/Card";
import Layout from "../components/Layout";

import { useForm } from "react-hook-form";

export default function Search({}) {
	const [pets, setPets] = useState([]);

	const [filters, setFilters] = useState({
		type: undefined,
		zipCode: undefined
	});

	const [filteredPets, setFilteredPets] = useState([]);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm();
	return (
		<Layout title="Search for missing pets">
			<Container maxW={"7xl"} py={{ base: 20, md: 28 }}>
				<form>
					{/* Filter options: Create dropdown for pet type, input for zipcode and submit button*/}
					{/* Submit should trigger dispatch action for redux, that should  */}
					<Flex
						maxW={"7xl"}
						px={12}
						justifyContent="center"
						alignContent="center">
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
						<Button>Search</Button>
					</Flex>
				</form>
				<Flex justifyContent="center">
					{/* This is where all the pets will be shown */}
					<Card />
					<Card />
					<Card />
				</Flex>
			</Container>
		</Layout>
	);
}
