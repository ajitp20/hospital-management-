import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Admin, Doctor, FindDoctor, Home, ScheduleOperation } from "./pages";
import "./index.css";

export const App = () => {
	// const [bestShows, setBestShows] = React.useState([]);

	React.useEffect(() => {
		console.log("componentDidMount success");
		// axios
		// 	.get("/data")
		// 	.then((res) => {
		// 		console.log("data recieved: ", res.data);
		// 		setBestShows(res.data[0]);
		// 	})
		// 	.catch(alert);
	}, []);

	return (
		<Router>
			<Helmet>
				<title>Operation Schedular for hospital Management</title>
			</Helmet>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/doctor" element={<Doctor />} />
				<Route path="/find" element={<FindDoctor />} />
				<Route path="/schedule" element={<ScheduleOperation />} />
			</Routes>
			{/* {console.log("render bestShows: ", bestShows)}
			azure-mern-demo
			<ul>
				{Object.keys(bestShows).map((cur, idx) => (
					<li>
						{cur} - {bestShows[cur]}{" "}
					</li>
				))}
			</ul> */}
		</Router>
	);
};

export default App;
