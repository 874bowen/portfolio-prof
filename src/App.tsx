import React from "react";
import { useColorMode } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

function App() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<div className="App">
			<Navbar colorMode={colorMode} toggleColorMode={toggleColorMode} />
			<Landing />
		</div>
	);
}

export default App;
