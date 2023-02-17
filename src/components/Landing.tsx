import { Avatar, Heading } from "@chakra-ui/react";
import React from "react";
import Pic from "../assets/bowen.jpeg";

const Landing = () => {
	return (
		<>
			<div className="landing__image-div">
				<Avatar size="2xl" src={Pic} className="landing__image" />
				<caption>Hello, I am Bowen!</caption>
				<Heading as="h1" size="xl" noOfLines={1}>
					A frontend developer
				</Heading>
				<Heading as="h1" size="xl" noOfLines={1}>
					specialised in React
				</Heading>
			</div>
		</>
	);
};

export default Landing;
