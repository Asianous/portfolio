import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experiences/Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./general-assembly-logo.png"
								alt="General Assembly"
								className="work-image"
							/>
							<div className="work-title">General Assembly</div>
							<div className="work-subtitle">
								Full Stack Software Engineer Immersive Course
							</div>
							<div className="work-duration">2023-2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
