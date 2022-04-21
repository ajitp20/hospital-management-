import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import styles from "./FindDoctor.module.css";

export const FindDoctor = () => {
	const [doctors, setDoctors] = React.useState();
	const [query, setQuery] = React.useState("");

	const handleSearch = (e) => {
		e.preventDefault();
		setQuery(e.target.value);
	};

	React.useEffect(() => {
		const doctorsFetcher = async () => {
			const response = await axios.get("/doctors");
			const data = await response.data;
			console.log(data);
			setDoctors(data);
		};
		doctorsFetcher();
	}, []);

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
				<input
					type="text"
					placeholder="Search Doctor"
					onChange={handleSearch}
				/>
			</div>
			<ul>
				{doctors &&
					doctors
						.filter((doctor) =>
							doctor.name.toLowerCase().includes(query)
						)
						.map((doctor) => (
							<li>
								<div>
									Name: {doctor.name}
									<br />
									Email: {doctor.email}
									<br />
									Phone no.: {doctor.phoneNumber}
									<br />
									Specality: {doctor.specality}
									<br />
								</div>
							</li>
						))}
			</ul>
			<ul>{console.log(doctors)}</ul>
			<br />
		</div>
	);
};
