import React, { useState } from "react";
import "./ContactSection.scss";
import { images } from "../../constants";
import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";
import LoadingButton from "../LoadingButton/LoadingButton";

const formVariants = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};
const imgVariants = {
	hidden: {
		opacity: 0,
		x: 100,
	},
	visible: {
		opacity: 1,
		x: 0,
	},
};

const successVariants = {
	hidden: {
		opacity: 0,
		y: 10,
	},
	show: {
		opacity: 1,
		y: 0,
	},
};

const initialData = {
	name: "",
	email: "",
	message: "",
};

function ContactSection() {
	const [formData, setFormData] = useState(initialData);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [isMessageSent, setIsMessageSent] = useState(false);
	const [error, setError] = useState(false);
	const [copied, setCopied] = useState(false);

	const { scrollYProgress } = useScroll();

	const copyHandler = () => {
		navigator.clipboard.writeText("kashishdhingra64@gmail.com");
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	const translateX = useTransform(scrollYProgress, [0, 1], [-300, 100]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsFormSubmitted(true);
		emailjs
			.send("gmail", "template_tjvulgx", formData, "cdFXPYqWyku8-Gwxn")
			.then(
				function (response) {
					console.log("SUCCESS!", response.status, response.text);
					setIsMessageSent(true);
					setFormData(initialData);
				},
				function (err) {
					console.log("FAILED...", err);
					setError(true);
				}
			);
	};

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div className="app__contact section" id="contact">
			<h2 className="app__contact-heading heading-text">
				Say Hello
				<motion.p className="app__contact-headingbg" style={{ translateX }}>
					Contact
				</motion.p>
			</h2>
			<div className="app__flex app__contact-content">
				<motion.form
					variants={formVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="app__contact-form"
					onSubmit={(e) => handleSubmit(e)}
				>
					<div>
						<div>
							<div className="app__contact-row">
								<label htmlFor="name">Name</label>
								<input
									id="name"
									name="name"
									type="text"
									required
									disabled={isMessageSent ? true : false}
									onChange={handleChangeInput}
									value={formData.name}
								/>
							</div>
							<div className="app__contact-row">
								<label htmlFor="email">Email</label>
								<input
									id="email"
									name="email"
									type="email"
									disabled={isMessageSent ? true : false}
									required
									onChange={handleChangeInput}
									value={formData.email}
								/>
							</div>
							<div className="app__contact-row">
								<label htmlFor="message">Message</label>
								<textarea
									rows="5"
									name="message"
									disabled={isMessageSent ? true : false}
									id="message"
									onChange={handleChangeInput}
									value={formData.message}
								/>
							</div>
						</div>
						<motion.h2
							variants={successVariants}
							initial="hidden"
							animate={isMessageSent ? "show" : ""}
							className="app__contact-success-alert"
						>
							{error ? (
								<p className="app__contact-mail">
									Error, please mail me at kashishdhingra64@gmail.com
									{copied ? (
										<img
											src={images.check}
											alt="copy mail"
											className="app__footer-mail-copy"
											onClick={() => copyHandler()}
										/>
									) : (
										<img
											src={images.copy}
											alt="copy mail"
											className="app__footer-mail-copy"
											onClick={() => copyHandler()}
										/>
									)}
								</p>
							) : (
								"Thank you for getting in touch!😉"
							)}
						</motion.h2>
						<LoadingButton
							submittingStarted={isFormSubmitted}
							messageSent={isMessageSent}
							error={error}
						/>
					</div>
				</motion.form>
				<div className="app__contact-img-container">
					<motion.img
						className="app__contact-img"
						variants={imgVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 1 }}
						src={images.peaceMan}
						alt="peace man"
					/>
				</div>
			</div>
		</div>
	);
}

export default ContactSection;
