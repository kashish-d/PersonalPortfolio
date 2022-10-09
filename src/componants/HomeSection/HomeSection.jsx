import React from "react";
import "./HomeSection.scss";

import { motion } from "framer-motion";

import { images } from "../../constants";

const containerVariants = {
	visible: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const introtextVariants = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			delay: 0.5,
		},
	},
};

const introDesigVariants = {
	hidden: {
		opacity: 0,
		y: -20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.5,
		},
	},
};
const imgVariants = {
	hidden: {
		opacity: 0,
		x: 40,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.8,
		},
	},
};

function HomeSection() {
	return (
		<div className="app__home section" id="home">
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="app__home-introtext"
			>
				<motion.h1 variants={introtextVariants}>Hi,</motion.h1>
				<motion.h1 variants={introtextVariants}>I'm</motion.h1>
				<motion.h1 className="app__home-name" variants={introtextVariants}>
					Kashish
				</motion.h1>
				<motion.h3 variants={introDesigVariants}>
					An Interactive Front-End Developer
				</motion.h3>
				<motion.button variants={introtextVariants} whileHover={{ scale: 1.1 }}>
					<a href="/Resume.pdf" target="_blank" rel="noreferrer noopener">
						Resume
					</a>
				</motion.button>
			</motion.div>
			<motion.div
				variants={imgVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.8 }}
				className="app__home-introimage"
			>
				<img src={images.wavingHello} alt="waving hello man" />
			</motion.div>
		</div>
	);
}

export default HomeSection;
