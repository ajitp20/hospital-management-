import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import styles from "./Doctor.module.css";

export const Doctor = () => {
	return (
		<div className={styles.body}>
			<Helmet>
				<title>Doctorlogin</title>
			</Helmet>
			<Link to="/">
				<button type="submit" className={styles.navbtn}>
					Home
				</button>
			</Link>
			<h3>Doctor Login</h3>
			<div className={styles.topnav}>
				<input type="text" placeholder="Email..." />
				<br />
				<input type="text" placeholder="Password..." />
				<br />
				<div>
					<label for="cars">Select the Speacalist:</label>
					<select name="Specialist" id="gynecologist">
						<option value=""></option>
						<option value="cardiologist">cardiologist</option>
						<option value="dermatologist">dermatologist</option>
						<option value="gynecologist">gynecologist</option>
					</select>
				</div>
				<br />
				<button type="submit" className={styles.subbutton}>
					Login
				</button>
			</div>
		</div>
	);
};
