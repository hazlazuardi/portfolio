import { Container, Typography } from '@material-ui/core';
import React, { Fragment, useState, useEffect } from 'react';
import { fetchTodos, uploadTodo } from '../../services/HazApi';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

// localStorageKey
const updatedLS = 'UpdatedTodos';
const pendingLS = 'PendingTodos';

function Todo() {
	// To contain user type
	const [ todo, setTodo ] = useState({
		title: '',
		description: '',
		owner: '',
		completed: false,
		online: false
	});

	const [ updatedTodos, setUpdatedTodos ] = useState([]);
	const [ pendingTodos, setPendingTodos ] = useState([]);

	// AuthToken
	let authToken = '';
	try {
		authToken = localStorage.getItem('AuthToken');
	} catch (error) {
		console.log('no auth', error);
	}

	// TodoAdd
	const updateLSPendingTodos = (todo) => {
		const fromLS = JSON.parse(localStorage.getItem(pendingLS));
		fromLS.push(todo);
		localStorage.setItem(pendingLS, JSON.stringify(fromLS));
	};

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setTodo((prev) => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		uploadTodo(todo, authToken)
			.then((res) => {
				console.log('sent bro', res);
			})
			.catch((err) => {
				console.log('error broo', err);
				setPendingTodos((prev) => [ ...prev, todo ]);
				updateLSPendingTodos(todo);
			});
	};

	// Landed useEffect
	useEffect(() => {
		if (!JSON.parse(localStorage.getItem(updatedLS)) || JSON.parse(localStorage.getItem(updatedLS)).length === 0) {
			fetchTodos(authToken)
				.then((res) => {
					setUpdatedTodos(res.data);
				})
				.catch((err) => {
					console.log('error landed');
				});
		} else {
			setUpdatedTodos(JSON.parse(localStorage.getItem(updatedLS)));
		}
	}, []);

	useEffect(
		() => {
			if (JSON.parse(localStorage.getItem(updatedLS)).length === 0) {
				localStorage.setItem(updatedLS, JSON.stringify(updatedTodos));
			}
            if (JSON.parse(localStorage.getItem(pendingLS)).length === 0) {
                localStorage.setItem(pendingLS, JSON.stringify(pendingTodos));
            }
		},
		[ updatedTodos, pendingTodos ]
	);

	return (
		<Fragment>
			<Container>
				<Typography variant="h2">Todo</Typography>
				<TodoList pendingTodos={pendingTodos} updatedTodos={updatedTodos} />
			</Container>
			<TodoAdd todo={todo} handleChange={handleChange} handleSubmit={handleSubmit} />
		</Fragment>
	);
}

export default Todo;
