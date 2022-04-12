import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

export const Home = () => {
	return (
		<div className={styles.body}>
			<header>Operation Scheduler</header>
			<nav>
				<Link to="/find">
					<button type="submit" className={styles.navBtn}>
						Find Doctor
					</button>
				</Link>

				<Link to="/doctor">
					<button type="submit" className={styles.navBtn}>
						Doctor
					</button>
				</Link>

				<Link to="/admin">
					<button href="submit" className={styles.navBtn}>
						Admin
					</button>
				</Link>
			</nav>
			<article className={styles.content}>
				<p>
					High-quality health care helps prevent diseases and improve
					quality of life. Healthy People 2030 focuses on improving
					health care quality and making sure all people get the
					health care services they need. Helping health care
					providers communicate more effectively can help improve
					health and well-being.
				</p>
				<Link to="/schedule">
					<button href="submit" className={styles.navBtn}>
						Patient Login
					</button>
				</Link>
			</article>
		</div>
	);
};
