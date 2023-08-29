import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Creations I've crafted in my attempt to leave a
							mark.
						</div>

						<div className="subtitle projects-subtitle">
							In addition to my individual coding pursuits, I have
							also gained valuable experiences in teamwork,
							collaboration, and effective communication through
							my participation in the General Assembly Coding
							Bootcamp. This immersive learning environment
							provided me with the opportunity to collaborate with
							fellow aspiring developers on diverse projects.
							Engaging in group coding projects allowed me to
							refine my teamwork skills, enhance code integration
							practices, and learn the art of merging different
							coding styles seamlessly. The experience of working
							within a team further strengthened my ability to
							communicate complex technical concepts in a clear
							and concise manner, fostering a collaborative
							atmosphere that enabled us to tackle challenges
							collectively. These experiences have not only
							broadened my technical skill set but have also
							instilled in me a profound appreciation for the
							collective synergy that emerges when diverse minds
							converge to achieve a common coding goal.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
