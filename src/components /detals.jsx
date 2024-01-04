
import React, { useState, useEffect } from 'react';

const Details = ({ info }) => {
	const [details, setDetails] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchDetails = async () => {
			setLoading(true);
			try {
				const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`);
				const data = await response.json();
				setDetails(data);
				setLoading(false);
			} catch (error) {
				console.error(`Error fetching details for user ${info.id}:`, error);
			}
		};

		if (info.id) {
			fetchDetails();
		}


		return () => {

		};
	}, [info.id]);

	return (
		<div>
			{loading ? (
				<p>Loading details...</p>
			) : (
				<div>
					<h2>{info.name}</h2>
					<p>{details.email}</p>

				</div>
			)}
		</div>
	);
};

export default Details;
