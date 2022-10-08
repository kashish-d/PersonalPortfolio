import React, { useState, useEffect } from "react";
import "./BurgerMenu.scss";
import { motion } from "framer-motion";

const line1Variants = {
	hidden: {
		y: 0,
		rotate: "0deg",
	},
	visible: {
		y: "8px",
		rotate: "90deg",
		transition: {
			y: {
				duration: 0.2,
			},
			rotate: {
				delay: 0.2,
			},
		},
	},
};

const line3Variants = {
	hidden: {
		y: 0,
		transition: {
			y: {
				duration: 0.2,
			},
		},
	},
	visible: {
		y: "-8px",
		transition: {
			y: {
				duration: 0.5,
			},
			rotate: {
				delay: 0.5,
			},
		},
	},
};

const menuVariants = {
	hidden: {
		rotate: 0,
	},
	visible: {
		rotate: "45deg",
		transition: {
			delay: 0.2,
		},
	},
};

const navVariants = {
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const navLinkVariants = {
	hidden: {
		x: 800,
	},
	visible: {
		x: 0,
		transition: {
			type: "spring",
			duration: 0.3,
		},
	},
};

function BurgerMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const body = document.querySelector("body");

	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	useEffect(() => {
		if (isOpen) {
			body.classList.add("lock-scroll");
		} else {
			body.classList.remove("lock-scroll");
		}
	}, [isOpen, body]);

	return (
		<div className="app__burger">
			<motion.div
				variants={menuVariants}
				animate={isOpen ? "visible" : "hidden"}
				className={`app__burger-menu ${isOpen ? "active" : ""}`}
				onClick={handleClick}
			>
				<motion.div
					variants={line1Variants}
					animate={isOpen ? "visible" : "hidden"}
					className="line line1 "
				></motion.div>
				<div className="line line2"></div>
				<motion.div
					variants={line3Variants}
					animate={isOpen ? "visible" : "hidden"}
					className="line line3"
				></motion.div>
			</motion.div>
			<div
				className="app__burger-sidebar-parent"
				onClick={() => setIsOpen(false)}
			></div>
			<div className="app__burger-sidebar">
				<motion.ul
					variants={navVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="app__burger-links app__flex"
				>
					{["home", "about", "works", "experiments", "contact"].map((link) => (
						<motion.li
							variants={navLinkVariants}
							className={`app__burger-link ${link}`}
							key={link}
							onClick={() => setIsOpen(false)}
						>
							<div />
							<a href={`#${link}`}>{link}</a>
						</motion.li>
					))}
				</motion.ul>
			</div>
		</div>
	);
}

export default BurgerMenu;
