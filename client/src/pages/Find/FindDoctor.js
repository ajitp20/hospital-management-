import React from "react";
import { Link } from "react-router-dom";

import styles from "./FindDoctor.module.css";

export const FindDoctor = () => {
	return (
		<div className={styles.body}>
			<Link to="/">
				<button type="submit" className={styles.navbtn}>
					Home
				</button>
			</Link>

			<h3>Find Doctor Details</h3>

			<br />
			<div className={styles.topnav}>
				<input type="text" placeholder="Search Doctor" />
			</div>
			<br />
		</div>
	);
};
