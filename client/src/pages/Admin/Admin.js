import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import styles from "./Admin.module.css";

export const Admin = () => {
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
			<div className={styles.topnav}>
				<input type="text" placeholder="Email..." />
				<br />
				<input type="text" placeholder="Password..." />
			</div>
			<br />
			<div>
				<button type="submit" className={styles.subbutton}>
					Login
				</button>
			</div>
		</div>
	);
};
