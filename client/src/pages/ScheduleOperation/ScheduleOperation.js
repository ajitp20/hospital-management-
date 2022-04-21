import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";

import styles from "./ScheduleOperation.module.css";

export const ScheduleOperation = () => {
	const [name, setName] = React.useState("");
	const [parentName, setParentName] = React.useState("");
	const [age, setAge] = React.useState(0);
	const [gender, setGender] = React.useState("");
	const [dateOfOpearation, setDateOfOperation] = React.useState("");
	const [time, setTime] = React.useState("");
	const [address, setAddress] = React.useState("");
	const [problemsAndRequirements, setProblemsAndRequirements] =
		React.useState("");
	const [doctor, setDoctor] = React.useState("");
	const [typeOfPatient, setTypeOfPatient] = React.useState("");
	const [doctorSuggested, setDoctorSuggested] = React.useState("");

	const handleFormName = (e) => {
		e.preventDefault();
		setName(e.target.value);
	};
	const handleFormParentName = (e) => {
		e.preventDefault();
		setParentName(e.target.value);
	};
	const handleFormAge = (e) => {
		e.preventDefault();
		setAge(e.target.value);
	};
	const handleFormGender = (e) => {
		e.preventDefault();
		setGender(e.target.value);
	};
	const handleFormDateOfOperation = (e) => {
		e.preventDefault();
		setDateOfOperation(e.target.value);
	};
	const handleFormTime = (e) => {
		e.preventDefault();
		setTime(e.target.value);
	};
	const handleFormAddress = (e) => {
		e.preventDefault();
		setAddress(e.target.value);
	};
	const handleFormProblemsAndRequirements = (e) => {
		e.preventDefault();
		setProblemsAndRequirements(e.target.value);
	};
	const handleFormDoctor = (e) => {
		e.preventDefault();
		setDoctor(e.target.value);
	};
	const handleFormTypeOfPatient = (e) => {
		e.preventDefault();
		setTypeOfPatient(e.target.value);
	};
	const handleFormDoctorSuggested = (e) => {
		e.preventDefault();
		setDoctorSuggested(e.target.value);
	};
	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const body = {
			name: name,
			parentName: parentName,
			age: age,
			gender: gender,
			dateOfOpearation: dateOfOpearation,
			time: time,
			address: address,
			problemsAndRequirements: problemsAndRequirements,
			doctor: doctor,
			typeOfPatient: typeOfPatient,
			doctorSuggested: doctorSuggested,
		};

		const response = await axios.post("/schedule", body);
		const data = await response.data;
		const status = response.status;
		console.log(data, status);
	};

	return (
		<div className={styles.body}>
			<Helmet>
				<title>Schedule Operation</title>
			</Helmet>
			<nav>
				<Link to="/">
					<button type="submit" className={styles.navbtn}>
						Home
					</button>
				</Link>
			</nav>
			<h3>Schedule Operation</h3>

			<br />
			<form onSubmit={handleFormSubmit}>
				<div>
					<label htmlFor="Name">Name:</label>
					<input
						type="text"
						placeholder="Name"
						onChange={handleFormName}
					/>
				</div>

				<br />
				<div>
					<label htmlFor="parent name">Parent Name:</label>
					<input
						type="text"
						placeholder="Parent Name"
						onChange={handleFormParentName}
					/>
				</div>

				<br />
				<div>
					<label htmlFor="age">Age:</label>
					<input
						type="text"
						placeholder="Age"
						onChange={handleFormAge}
					/>
				</div>

				<div>
					<br />
					<label htmlFor="Gender">Select the Gender:</label>
					<select
						name="Gender"
						id="Gender"
						onChange={handleFormGender}
						// value={this.state.selectValue}
					>
						<option value=""></option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
						<option value="Others">Others</option>
					</select>
				</div>
				<br />
				<div>
					<label htmlFor="opdate">Date of Operation:</label>
					<input
						type="date"
						id="opdate"
						name="Operation Date"
						onChange={handleFormDateOfOperation}
					/>
				</div>
				<br />
				<label htmlFor="time">Time:</label>
				<input
					type="time"
					id="time"
					name="Time"
					onChange={handleFormTime}
				/>

				<br />
				<label htmlFor="time">Flat No.:</label>
				<input
					type="number"
					id="number"
					name="number"
					onChange={handleFormAddress}
				/>

				<br />
				<label htmlFor="Address">Address:</label>
				<input
					type="Address"
					id="Address"
					name="Address"
					onChange={handleFormAddress}
				/>

				<br />
				<label htmlFor="Problems & Requirements">
					Problems & Requirements:
				</label>
				<input
					type="Problems"
					id=""
					name="Problems"
					onChange={handleFormProblemsAndRequirements}
				/>
				<br />
				<div>
					<label htmlFor="doctor">Select the Doctor:</label>
					<select
						name="Specialist"
						id="gynecologist"
						onChange={handleFormDoctor}
					>
						<option value=""></option>
						<option value="cardiologist">cardiologist</option>
						<option value="dermatologist">dermatologist</option>
						<option value="gynecologist">gynecologist</option>
					</select>
				</div>
				<div>
					<label htmlFor="Patient">
						Select the type of Patient :{" "}
					</label>
					<select
						name="Patient"
						id="Patient"
						onChange={handleFormTypeOfPatient}
					>
						<option value=""></option>
						<option value="Emergency Patient">
							Emergency Patient
						</option>
						<option value="Preventative ">
							Preventative Patient{" "}
						</option>
						<option value="Palliative">Palliative Patient</option>
					</select>
				</div>
				<br />
				<label htmlFor="Doctor Suggested">Doctor Suggested:</label>
				<input
					type="Doctor"
					id=""
					name="Problems"
					onChange={handleFormDoctorSuggested}
				/>

				<br />
				<button type="submit">Post</button>
			</form>
		</div>
	);
};
