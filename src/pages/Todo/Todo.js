import React, { Fragment, useEffect, useState, useCallback } from 'react';
import TodoList from './TodoList';
import { useHistory } from 'react-router-dom';

// import axios from 'axios';
import { fetchTodos } from '../../services/HazApi';
import TodoAdd from './TodoAdd';

// const urlTodos = 'https://hazlazuardi.herokuapp.com/api/todos/';
// const urlTodos = 'http://localhost:8100/api/todos/';

function today() {
	const dateObj = new Date();
	let dd = String(dateObj.getDate()).padStart(2, '0');
	var mm = String(dateObj.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = dateObj.getFullYear();
	let str = yyyy + '-' + mm + '-' + dd;
	return str;
}

function Todo() {
	const history = useHistory();
	const localTodo = 'LocalTodos';
	const AuthData = 'AuthData';
	const AuthToken = 'AuthToken';
	const AuthDataParsed = JSON.parse(localStorage.getItem(AuthData));
	let current_user = '';
	try {
		current_user = AuthDataParsed.user.username;
        localStorage.setItem('CurrentUser', JSON.stringify(current_user))
    } catch (err) {
		history.push('/login');
	}

	const keysToClear = [ AuthData, AuthToken, 'TodosUpdate', 'OnlineTodos' ];

	const [ onlineTodos, setOnlineTodos ] = useState([]);
	const [ offlineTodos, setOfflineTodos ] = useState([]);

	const [ todo, setTodo ] = useState({
		title: '',
		owner: current_user,
		description: '',
		completed: false,
		online: false
	});

	const [ isLoading, setIsLoading ] = useState(true);
	// const { Provider, Consumer } = createContext();

	const authToken = localStorage.getItem(AuthToken);

	const updateOnlineTodosStorage = (data, update) => {
		localStorage.setItem('OnlineTodos', JSON.stringify(data));
		localStorage.setItem('TodosUpdate', update);
	};

	const updateLocalTodosStorage = (data) => {
		localStorage.setItem(localTodo, JSON.stringify(data));
	};

	// const getAllTodos = useCallback(async () => {
	// 	await axios
	// 		.get(urlTodos, {
	// 			headers: {
	// 				Authorization: `JWT ${authToken}`
	// 			}
	// 		})
	// 		.then((res) => {
	// 			setData(res.data);
	// 			setIsLoading(false);
	//             localStorage.setItem(localTodo, JSON.stringify(res.data))
	// 		})
	// 		.catch((err) => {
	// 			setError(err);
	// 			localStorage.removeItem('AuthToken');
	// 			history.push('/login');
	// 			return <h1>{{ error }}</h1>;
	// 		});
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

	// useEffect(
	// 	() => {
	// 		getAllTodos();
	// 		// eslint-disable-next-line react-hooks/exhaustive-deps
	// 	},
	// 	[ getAllTodos ]
	// );

	// const createTodo = useCallback(
	// 	async () => {
	// 		await axios
	// 			.post(urlTodos, onlineTodos, {
	// 				headers: {
	// 					Authorization: `JWT ${authToken}`
	// 				}
	// 			})
	// 			.then((res) => {
	// 				console.log(res);
	// 			})
	// 			.catch((err) => {
	// 				console.log(err);
	// 			});
	// 	},
	// 	[ authToken ]
	// );

	const handleChange = ({ target }) => {
		setTodo((prev) => ({
			...prev,
			[target.name]: target.value
		}));
		console.log(todo);
	};

	const handleSubmit = useCallback(
		(event) => {
			event.preventDefault();
			console.log('dari callback');

			if (todo.online === false) {
				setOfflineTodos((prev) => [ ...prev, todo ]);
				const fromLocal = JSON.parse(localStorage.getItem(localTodo));
				fromLocal.push(todo);
				updateLocalTodosStorage(fromLocal);
			}
			// updateLocalTodosStorage(addNew())
			// if (todo.online === true) {
			//     setOnlineTodos(prev=>([
			//         ...prev,
			//         todo
			//     ]))
			// 	updateLocalTodosStorage(onlineTodos);
			// 	console.log(onlineTodos);
			// }
		},
		[ todo ]
	);

	const handleSync = () => {
		setOnlineTodos(localStorage.getItem('OnlineTodos'));
		localStorage.removeItem(keysToClear);
		// getAllTodos();

		setOnlineTodos((prev) => ({
			...prev
		}));
	};

	// useEffect(() => {
	// 	const todosData = JSON.parse(localStorage.getItem('TodosData'));
	// 	const todosUpdate = localStorage.getItem('TodosUpdate');

	// 	if (today() !== todosUpdate) {
	// 		console.log('new Fetch');
	//         fetchTodos(authToken)
	//         .then((res) => {
	// 				updateLocalTodosData(res.data.jadwal.data, today());
	// 				if (JSON.parse(localStorage.getItem('PrayerData'))) {
	// 					setData(JSON.parse(localStorage.getItem('PrayerData')));
	// 					setIsLoading(false);
	// 				}
	// 			})
	// 			.catch((err) => {
	// 				alert('timeout');
	// 				localStorage.clear();
	// 				history.push('/');
	// 			});
	// 	} else {
	// 		console.log('old Fetch');
	// 		setData(todosData);
	// 		setIsLoading(false);
	// 	}
	// }, [history]);
	useEffect(() => {
		if (!JSON.parse(localStorage.getItem('OnlineTodos'))) {
			if (!JSON.parse(localStorage.getItem('LocalTodos'))) {
				updateLocalTodosStorage(offlineTodos);
			} else {
				setOfflineTodos(JSON.parse(localStorage.getItem('LocalTodos')));
			}

			return fetchTodos(authToken)
				.then((res) => {
					console.log('new fetch');
					console.log(res);
					updateOnlineTodosStorage(res, today());
					if (JSON.parse(localStorage.getItem('OnlineTodos'))) {
						setOnlineTodos(JSON.parse(localStorage.getItem('OnlineTodos')));
						setIsLoading(false);
					}
				})
				.catch((error) => {
					alert('timeout');
					keysToClear.forEach((k) => localStorage.removeItem(k));
					history.push('/login');
				});
		} else {
			console.log('old fetch');
			setOnlineTodos(JSON.parse(localStorage.getItem('OnlineTodos')));
			setOfflineTodos(JSON.parse(localStorage.getItem('LocalTodos')));
			setIsLoading(false);
		}
	}, []);
	// The Flow
	// A: First Time Login
	// 1. Fetch new data
	// 2. Store to localstorage
	// 3. Fetch from localstorage to state
	// 4. While the auth token isn't expired, we'll use the data in localstorage
	// 5. If the token is expired, go to step 1
	// B: Offline usage
	// 1. When there's no

	return (
		// <Provider value={data}>
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
			<TodoAdd current_user={current_user} todo={todo} handleChange={handleChange} handleSubmit={handleSubmit} handleSync={handleSync} />
		</Fragment>
		// </Provider>
	);
}

export default Todo;
