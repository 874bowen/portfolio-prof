import React from "react";
import { useColorMode } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<div className="App">
			<Navbar colorMode={colorMode} toggleColorMode={toggleColorMode} />
		</div>
	);
}

export default App;
