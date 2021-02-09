import React, { Fragment, useEffect, useState, useCallback } from 'react';
import TodoList from './TodoList';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

const urlTodos = 'https://hazlazuardi.herokuapp.com/api/todos/';
// const urlTodos = 'http://localhost:8100/api/todos/';

function Todo() {
	console.log(localStorage.AuthToken);

	const [ data, setData ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);
	const [ error, setError ] = useState('');
	const history = useHistory();
	// const { Provider, Consumer } = createContext();

	const authToken = localStorage.getItem('AuthToken');

	const getAllTodos = useCallback(async () => {
		await axios
			.get(urlTodos, {
				headers: {
					Authorization: `JWT ${authToken}`
				}
			})
			.then((res) => {
				setData(res.data);
				setIsLoading(false);
				console.log(data);
			})
			.catch((err) => {
				setError(err);
				localStorage.removeItem('AuthToken');
				history.push('/login');
				return <h1>{{ error }}</h1>;
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(
		() => {
			getAllTodos();
			// eslint-disable-next-line react-hooks/exhaustive-deps
		},
		[ getAllTodos ]
	);

    
	return (
		// <Provider value={data}>
		<Fragment>
			{
				!isLoading ? <TodoList data={data} /> :
				<p>Loading..</p>}
		</Fragment>
		// </Provider>
	);
}

export default Todo;
