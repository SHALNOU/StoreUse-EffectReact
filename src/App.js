
import React, { useState } from 'react';
import List from './components /list';
import Details from './components /detals';

const App = () => {
	const [selectedUser, setSelectedUser] = useState(null);

	const handleSelectUser = (user) => {
		setSelectedUser(user);
	};

	return (
		<div>
			<List onSelectUser={handleSelectUser} />
			{selectedUser && <Details info={selectedUser} />}
		</div>
	);
};

export default App;
