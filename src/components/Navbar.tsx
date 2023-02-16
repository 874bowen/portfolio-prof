import { Link } from "@chakra-ui/react";
import React from "react";

const Navbar = ({ colorMode, toggleColorMode }: any) => {
	return (
		<nav className="nav">
			<div className="nav__div">
				<div className="nav__social-links">
					<i className="fa-brands fa-linkedin"></i>
					<i className="fa-brands fa-twitter"></i>
					<i className="fa-brands fa-github"></i>
					<i className="fa-brands fa-dev"></i>
				</div>
				<div className="nav__page-links">
					<Link>Projects</Link>
					<Link>Contact</Link>
					<div
						className={
							colorMode === "light" ? "toggle__light-div" : "toggle__dark-div"
						}
						onClick={toggleColorMode}
					>
						<div
							className={
								colorMode === "light"
									? "toggle__light-circle"
									: "toggle__dark-circle"
							}
						></div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
