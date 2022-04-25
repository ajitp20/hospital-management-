import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";

import styles from "./Admin.module.css";

export const Admin = () => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	// const [doctorData, setDoctorData] = React.useState();
	const [patientData, setPatientData] = React.useState();
	const [isAunthenticated, setIsAuthenticated] = React.useState(false);

	const handleFormEmail = (e) => {
		e.preventDefault();
		setEmail(e.target.value);
	};
	const handleFormPassword = (e) => {
		e.preventDefault();
		setPassword(e.target.value);
	};
	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const body = {
			email: email,
			password: password,
		};

		const response = await axios.post("/users", body);
		const data = await response.data;
		if (data.length <= 0) setIsAuthenticated(false);
		else setIsAuthenticated(true);
		const status = response.status;
		console.log(data, status);
	};

	React.useEffect(() => {
		async function getData() {
			if (isAunthenticated) {
				const patientResponse = await axios.get("/schedule");
				setPatientData(await patientResponse.data);

				// const doctorResponse = await axios.get("/doctors");
				// setDoctorData(await doctorResponse.data);
			}
		}
		getData();
	}, [isAunthenticated]);

	return (
		<div className={styles.body}>
			<Helmet>
				<title>Admin Login</title>
			</Helmet>
			<Link to="/">
				<button type="submit" className={styles.navbtn}>
					Home
				</button>
			</Link>
			<h3>Admin Login</h3>
			<h4>
				{isAunthenticated
					? "Authenticated Successfully"
					: "Error Occured"}
			</h4>
			<form className={styles.topnav} onSubmit={handleFormSubmit}>
				<input
					type="text"
					placeholder="Email..."
					onChange={handleFormEmail}
				/>
				<br />
				<input
					type="password"
					placeholder="Password..."
					onChange={handleFormPassword}
				/>
				<br />
				<button type="submit" className={styles.subbutton}>
					Login
				</button>
			</form>
			<div style={{ display: "flex" }}>
				{patientData &&
					patientData.map((patient) => (
						<div
							style={{
								backgroundColor: "white",
								borderRadius: "12px",
								padding: "4px",
								marginRight: "20px",
							}}
						>
							<li>Name: {patient.name}</li>
							<li>Type of Patiend: {patient.typeOfPatient}</li>
							<li>Parent Name: {patient.parentName}</li>
							<li>Gender: {patient.gender}</li>
							<li>Age: {patient.age}</li>
							<li>Address: {patient.address}</li>
							<li>Doctor: {patient.doctor}</li>
							<li>Doctor Suggested: {patient.doctorSuggested}</li>
							<li>Time: {patient.time}</li>
							<li>
								Problems And Requirements:{" "}
								{patient.problemsAndRequirements}
							</li>
							<li>
								Date of Operation:{" "}
								{patient.datedateOfOpearation}
							</li>
						</div>
					))}
			</div>
		</div>
	);
};
