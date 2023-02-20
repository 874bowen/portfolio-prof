import React from "react";
import bts from "../assets/bts2.png";
import {
	Card,
	CardBody,
	Image,
	Stack,
	Heading,
	Text,
	Divider,
	CardFooter,
	ButtonGroup,
	Button,
	Link,
} from "@chakra-ui/react";

type Proj = {
	id: Number;
	title: String;
	subtitle: String;
	image: String;
	category: String;
	link: String;
	github: String;
	description: String;
};

const Project = ({ project }: any) => {
	console.log();

	return (
		<Card w="100%">
			<CardBody>
				<Image
					src={`${project.image}`}
					alt="Green double couch with wooden legs"
					borderRadius="lg"
					className="img"
				/>
				<Stack mt="6" spacing="3">
					<Heading size="md">{project.title}</Heading>
					<Text>{project.description}</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter>
				<ButtonGroup spacing="2">
					<Link href={project.github} style={{textDecoration: "none"}}>
						<Button variant="solid" colorScheme="blue">
							GitHub
						</Button>
					</Link>
					<Link href={project.link} style={{textDecoration: "none"}}>
						<Button variant="ghost" colorScheme="blue">
							Site
						</Button>
					</Link>
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
};

export default Project;
