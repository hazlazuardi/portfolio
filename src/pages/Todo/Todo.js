import React, { Fragment, useEffect, useState } from 'react';
import TodoList from './TodoList';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

const urlTodos = 'https://hazlazuardi.herokuapp.com/api/todos/';
// const urlTodos = 'http://localhost:8100/api/todos/';

function Todo() {
	console.log(localStorage.AuthToken);

	const [ data, setData ] = useState([]);

	// const { Provider, Consumer } = createContext();

	const authToken = localStorage.getItem('AuthToken');
	useEffect(
		() => {
			let mounted = true;
			const options = {
				method: 'GET',
				url: 'http://localhost:8100/api/todos/',
				headers: {
					Authorization: `JWT ${authToken}`
				}
			};

			if (mounted) {
				axios
					.request(options)
					.then((res) => {
						let data = res.data;
						if (data) {
							console.log(data);
							setData(data);
						}
					})
					.catch((err) => {
						console.log('login failed');
					});
			}

			return () => {
				mounted = false;
			};
		},
		[ authToken ]
	);

	return (
		// <Provider value={data}>
		<Fragment>
			{
				localStorage.AuthToken ? <TodoList data={data} /> :
				<Redirect to="/login" />}
		</Fragment>
		// </Provider>
	);
}

export default Todo;
