import React from "react";
import "./ArtSection.scss";
import { images } from "../../constants";
import { motion, useScroll, useTransform } from "framer-motion";

const artWorks = [
	{
		key: 1,
		name: "Baby Yoda",
		desc: "Made by CSS",
		imgUrl: images.babyYoda,
		link: "https://codepen.io/Kashish_web/pen/bGWRrOZ",
	},
	{
		key: 2,
		name: "BB8",
		desc: "Made by CSS",
		imgUrl: images.bb8,
		link: "https://codepen.io/Kashish_web/pen/XWRQeZP",
	},
	{
		key: 3,
		name: "Cartoon Pirate",
		desc: "Made by CSS",
		imgUrl: images.pirate,
		link: "https://codepen.io/Kashish_web/pen/ExmLMOV",
	},
];

const artVariants = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
		},
	},
};

const artHoverVariants = {
	hidden: {
		opacity: 0,
		x: "-100%",
	},
	hover: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.2,
			type: "tween",
		},
	},
};

const artHoverLinkVariants = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	hover: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.2,
		},
	},
};

function ArtSection() {
	// const [loaded,setLoaded] =
	const { scrollYProgress } = useScroll();
	const translateX = useTransform(scrollYProgress, [0, 1], [-300, 100]);

	return (
		<div className="app__art section" id="experiments">
			<h2 className="app__art-heading heading-text">
				Web is fun
				<motion.p className="app__art-headingbg" style={{ translateX }}>
					Experiments
				</motion.p>
			</h2>
			<motion.div className="app__art-works">
				{artWorks.map((work) => (
					<div className="app__art-work-container app__flex" key={work.key}>
						<a href={work.link} target="_blank" rel="noreferrer">
							<motion.div
								variants={artVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.4 }}
								className="app__art-work app__flex"
								whileHover="hover"
								key={work.key}
							>
								<motion.div
									variants={artHoverVariants}
									className="hover-element"
								>
									<motion.img
										className="hover-element-img"
										variants={artHoverLinkVariants}
										src={images.codepen}
										alt="codepen"
									/>
								</motion.div>
								<img
									onLoad={() => {
										console.log("loaded");
									}}
									src={work.imgUrl}
									alt={work.name}
								/>
							</motion.div>
						</a>
						<motion.div
							variants={artVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.4 }}
						>
							<p className="app__art-work-name">{work.name}</p>
							<p className="app__art-work-desc">{work.desc}</p>
						</motion.div>
					</div>
				))}
			</motion.div>
		</div>
	);
}

export default ArtSection;
