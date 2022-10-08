import React from "react";
import "./WorkSection.scss";

import { projects } from "../../data";
import { images } from "../../constants";
import { motion, useScroll, useTransform } from "framer-motion";

const projectVariants = {
	hidden: {
		x: 0,
	},
	visible: {
		x: "100%",
	},
};

const projectHoverVariants = {
	hidden: {
		x: "-100%",
	},
	hover: {
		x: 0,
		transition: {
			// ease: "ease-out",
			type: "tween",
		},
	},
};

const projectDescHoverVariants = {
	hover: {
		scale: 1.03,
		transition: {
			delay: 0.25,
		},
	},
};

const projectNumVariants = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	hover: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.3,
		},
	},
};

function WorkSection() {
	const { scrollYProgress } = useScroll();
	const translateX = useTransform(scrollYProgress, [0, 1], [0, 400]);

	return (
		<div className="app__work section" id="works">
			<h2 className="app__work-heading heading-text">
				Latest Works
				<motion.p className="app__work-headingbg" style={{ translateX }}>
					Projects
				</motion.p>
			</h2>
			<div className="app__work-projects">
				{projects.map((project) => (
					<motion.div
						initial="hidden"
						whileHover="hover"
						className={`app__work-project ${
							project.projectId % 2 === 0 ? "right" : "left"
						}`}
						key={project.projectId}
						style={{
							backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.7) 50%),url(${
								images[project.projectImgUrl]
							})`,
						}}
					>
						<motion.p
							variants={projectNumVariants}
							className="app__work-project-num"
						>{`0${project.projectId}`}</motion.p>
						<motion.div
							variants={projectVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.7 }}
							className="app__work-project-cover"
						></motion.div>
						<motion.div
							variants={projectHoverVariants}
							className="app__work-project-hover-cover"
						></motion.div>
						<motion.div
							variants={projectDescHoverVariants}
							className="app__work-project-desc"
						>
							<h5>{project.projectName}</h5>
							<p>{project.projectDesc}</p>
							<div>
								<motion.div whileHover={{ scale: 1.4 }}>
									<a href={project.projectGit} target="_blank" rel="noreferrer">
										<img src={images.github} alt="github" />
									</a>
								</motion.div>
								<motion.div whileHover={{ scale: 1.4 }}>
									<a
										href={project.projectLink}
										target="_blank"
										rel="noreferrer"
									>
										<img src={images.monitor} alt="github" />
									</a>
								</motion.div>
							</div>
						</motion.div>
					</motion.div>
				))}
			</div>
		</div>
	);
}

export default WorkSection;
