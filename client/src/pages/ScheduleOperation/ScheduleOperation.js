import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import styles from "./ScheduleOperation.module.css";

export const ScheduleOperation = () => {
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
			<div>
				<label htmlFor="Name">Name:</label>
				<input type="text" placeholder="Name" />
			</div>

			<br />
			<div>
				<label htmlFor="parent name">Parent Name:</label>
				<input type="text" placeholder="Parent Name" />
			</div>

			<br />
			<div>
				<label htmlFor="age">Age:</label>
				<input type="text" placeholder="Age" />
			</div>

			<div>
				<br />
				<label htmlFor="Gender">Select the Gender:</label>
				<select name="Gender" id="Gender">
					<option value=""></option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Others">Others</option>
				</select>
			</div>
			<br />
			<div>
				<label htmlFor="opdate">Date of Operation:</label>
				<input type="date" id="opdate" name="Operation Date" />
			</div>
			<br />
			<label htmlFor="time">Time:</label>
			<input type="time" id="time" name="Time" />

			<br />
			<label htmlFor="time">Flat No.:</label>
			<input type="number" id="number" name="number" />

			<br />
			<label htmlFor="Address">Address:</label>
			<input type="Address" id="Address" name="Address" />

			<br />
			<label htmlFor="Problems & Requirements">
				Problems & Requirements:
			</label>
			<input type="Problems" id="" name="Problems" />
			<br />
			<div>
				<label htmlFor="doctor">Select the Doctor:</label>
				<select name="Specialist" id="gynecologist">
					<option value=""></option>
					<option value="cardiologist">cardiologist</option>
					<option value="dermatologist">dermatologist</option>
					<option value="gynecologist">gynecologist</option>
				</select>
			</div>
			<div>
				<label htmlFor="Patient">Select the type of Patient : </label>
				<select name="Patient" id="Patient">
					<option value=""></option>
					<option value="Emergency Patient">Emergency Patient</option>
					<option value="Preventative ">Preventative Patient </option>
					<option value="Palliative">Palliative Patient</option>
				</select>
			</div>
			<br />
			<label htmlFor="Doctor Suggested">Doctor Suggested:</label>
			<input type="Doctor" id="" name="Problems" />

			<br />
			<button type="Post">Post</button>
		</div>
	);
};
