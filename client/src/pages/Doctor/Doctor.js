import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

import styles from "./Doctor.module.css";

export const Doctor = () => {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [phoneNumber, setPhoneNumber] = React.useState("");
	const [specality, setSpecality] = React.useState("");

	const handleFormName = (e) => {
		e.preventDefault();
		setName(e.target.value);
	};
	const handleFormEmail = (e) => {
		e.preventDefault();
		setEmail(e.target.value);
	};
	const handleFormPhoneNumber = (e) => {
		e.preventDefault();
		setPhoneNumber(e.target.value);
	};
	const handleFormSpecality = (e) => {
		e.preventDefault();
		setSpecality(e.target.value);
	};
	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const body = {
			name: name,
			email: email,
			phoneNumber: phoneNumber,
			specality: specality,
		};

		const response = await axios.post("/registerDoctor", body);
		const data = await response.data;
		const status = response.status;
		console.log(data, status);
	};

	return (
		<div className={styles.body}>
			<Helmet>
				<title>Doctor Registation</title>
			</Helmet>
			<Link to="/">
				<button type="submit" className={styles.navbtn}>
					Home
				</button>
			</Link>
			<h3>Doctor Registration</h3>
			<form className={styles.topnav} onSubmit={handleFormSubmit}>
				<input
					type="text"
					placeholder="Name"
					onChange={handleFormName}
				/>
				<br />
				<input
					type="email"
					placeholder="Email"
					onChange={handleFormEmail}
				/>
				<br />
				<input
					type="text"
					placeholder="Phone no."
					onChange={handleFormPhoneNumber}
				/>
				<br />
				<div>
					<label for="cars">Select the Speacalist:</label>
					<select
						name="Specialist"
						id="gynecologist"
						onChange={handleFormSpecality}
					>
						<option value=""></option>
						<option value="cardiologist">cardiologist</option>
						<option value="dermatologist">dermatologist</option>
						<option value="gynecologist">gynecologist</option>
					</select>
				</div>
				<br />
				<button type="submit" className={styles.subbutton}>
					Register
				</button>
			</form>
		</div>
	);
};
