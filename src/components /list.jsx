
import React, { useState, useEffect } from 'react';

const List = ({ onSelectUser }) => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
				const data = await response.json();
				setUsers(data);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching users:', error);
			}
		};

		fetchData();


		return () => {

		};
	}, []);

	return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : (
				<ul>
					{users.map(user => (
						<li key={user.id} onClick={() => onSelectUser(user)}>
							{user.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default List;
