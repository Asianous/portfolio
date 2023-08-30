import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import users from "../../data/user";

export default function ContactForm() {
	const contacts = config.contacts;

	const [state, handleSubmit] = useForm("moqodgzz");
	if (state.succeeded) {
		return <p>Thanks for joining!</p>;
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="email">Email Address</label>
			<input id="email" type="email" name="email" />
			<ValidationError
				prefix="Email"
				field="email"
				errors={state.errors}
			/>
			<textarea id="message" name="message" />
			<ValidationError
				prefix="Message"
				field="message"
				errors={state.errors}
			/>
			<button type="submit" disabled={state.submitting}>
				Submit
			</button>
		</form>
	);
}
