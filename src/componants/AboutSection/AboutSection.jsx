import React from "react";
import "./AboutSection.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { images } from "../../constants";

const appearVariants = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

function AboutSection() {
	const { scrollYProgress } = useScroll();
	const translateX = useTransform(scrollYProgress, [0, 1], [-100, 400]);

	return (
		<div className="app__about section" id="about">
			<h2 className="app__about-heading heading-text">
				Myself
				<motion.p className="app__about-headingbg" style={{ translateX }}>
					About
				</motion.p>
			</h2>
			<div className="app__about-content">
				<motion.div
					className="app__about-info"
					variants={appearVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
				>
					<p>
						Hello 👋, My name is Kashish and I enjoy making things that live on
						the web. My interest in Software development started back in 2nd
						year of College. Once I started, I just knew that I wanted to keep
						doing this.
					</p>
					<p>
						I like to create interactive user interfaces, poke around at the
						backend and develop rich user experiences and applications. When not
						working, I play games. Actually for hire.
					</p>
				</motion.div>
				<motion.div
					className="app__about-skills"
					variants={appearVariants}
					initial="hidden"
					whileInView="visible"
					transition={{ delay: 0.2 }}
					viewport={{ once: true, amount: 0.5 }}
				>
					<img src={images.react} alt="react" />
					<img src={images.nodejs} alt="nodejs" />
					<img src={images.next} alt="next" />
					<img src={images.css} alt="css" />
					<img src={images.sass} alt="sass" />
					<img src={images.js} alt="js" />
				</motion.div>
			</div>
		</div>
	);
}

export default AboutSection;
