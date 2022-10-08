import React from "react";
import "./App.scss";

import Navbar from "./componants/Navbar/Navbar";
import HomeSection from "./componants/HomeSection/HomeSection";
import WorkSection from "./componants/WorkSection/WorkSection";
import ArtSection from "./componants/ArtSeaction/ArtSection";
import ContactSection from "./componants/ContactSection/ContactSection";
import FooterSection from "./componants/FooterSection/FooterSection";
import AboutSection from "./componants/AboutSection/AboutSection";
import scrollSpy from "./function";

function App() {
	scrollSpy();

	return (
		<div className="app">
			<Navbar />
			<HomeSection />
			<AboutSection />
			<WorkSection />
			<ArtSection />
			<ContactSection />
			<FooterSection />
		</div>
	);
}

export default App;
