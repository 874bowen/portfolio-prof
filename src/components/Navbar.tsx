import { Link } from "@chakra-ui/react";
import React from "react";

const Navbar = ({ colorMode, toggleColorMode }: any) => {
	return (
		<nav
			className="nav"
			style={
				colorMode === "dark"
					? { backgroundColor: "#04090f" }
					: { backgroundColor: "#959594" }
			}
		>
			<div className="nav__div">
				<div className="nav__social-links">
					<Link href="https://www.linkedin.com/in/ivan-bowen/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
					<Link href="https://twitter.com/bowe_n_" target="_blank" display={{base: "none", md: "block"}}><i className="fa-brands fa-twitter"></i></Link>
					<Link href="https://github.com/874bowen" target="_blank"><i className="fa-brands fa-github"></i></Link>
					<Link href="https://dev.to/bowen" target="_blank"><i className="fa-brands fa-dev"></i></Link>
				</div>
				<div className="nav__page-links">
					<Link href="#projects">Projects</Link>
					<Link href="#contact">Contact</Link>
					<div onClick={toggleColorMode}>
						{colorMode === "light" ? (
							<i className="fa-solid fa-moon"></i>
						) : (
							<i className="fa-solid fa-sun"></i>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
