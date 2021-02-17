import React, { Fragment, useEffect, useState, useMemo } from 'react';
import TodoList from './TodoList';
import { useHistory } from 'react-router-dom';

// import axios from 'axios';
import { fetchTodos } from '../../services/HazApi';
import TodoAdd from './TodoAdd';

function Todo() {
	// useHistory to push to login page whenever AuthToken is expired
	const history = useHistory();

	// Initialize keys to be removed/reset whenever there's error
	// const keysToClear = useMemo(() => [ 'AuthToken', 'OnlineTodos', 'OfflineTodos' ], []);
	const keysToClear = [ 'AuthToken', 'OnlineTodos', 'OfflineTodos' ];

	const [ todo, setTodo ] = useState({
		owner: '',
		title: '',
		description: '',
		completed: false,
		online: false
	});

	// We split allTodos into online and offline
	// Online have unique ID from DB
	const [ onlineTodos, setOnlineTodos ] = useState([]);
	// Offline don't have unique ID because aren't touched by DB yet (as the ID giver)
	const [ offlineTodos, setOfflineTodos ] = useState([]);

	// To fetch, we need the AuthToken that we stored in localStorage after login
	const authToken = JSON.parse(localStorage.getItem('AuthToken'));

	// flag to render loading indicator until the data is fully loaded
	const [ isLoading, setIsLoading ] = useState(true);

	// First useEffect to fetch data from DB, store it to State
	useEffect(() => {
		// Try to fetch data Online
		return fetchTodos(authToken)
			.then((res) => {
				console.log(res);
				setOnlineTodos(res);
			})
			// If offline, try to fetch data from localStorage
			.catch((error) => {
				console.log(error);
				// try {
				// 	setOnlineTodos(localStorage.getItem('OnlineTodos'));
				// } catch (error) {
				// 	// If still error, reset the localStorage by removing some data
				// 	keysToClear.forEach(k=>localStorage.removeItem(k));
				// 	// If there's no data, redirect to login page
				// 	history.push('/login');
				// }
			});
	}, []);

	// Second useEffect to store the stored allTodos to localStorage
	// useEffect(
	// 	() => {
	// 		localStorage.setItem('OnlineTodos', JSON.stringify(onlineTodos));
	// 	},
	// 	[ onlineTodos ]
	// );

	// After effect, check if there's data inside our state
	if (onlineTodos) {
		localStorage.setItem('OnlineTodos', JSON.stringify(onlineTodos));
		setIsLoading(false);
	}

	// User Interaction
	const handleChange = ({ target }) => {
		const { name, value } = target;
		setTodo((prev) => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<Fragment>
			{
				!isLoading ? <TodoList
					keysToClear={keysToClear}
					onlineTodos={onlineTodos}
					offlineTodos={offlineTodos}
				/> :
				<p>Loading..</p>}
			<br />
			<br />
			<TodoAdd todo={todo} handleChange={handleChange} handleSubmit={handleSubmit} />
		</Fragment>
	);
}

export default Todo;
