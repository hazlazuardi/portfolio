import http from '../http-common';

const headerJWT = (token) => {
	return {
		headers: {
			'Authorization': `JWT ${token}`
		}
	};
};

const axios = require('axios');

export const fetchTodos = async (token) => {
	const url = 'http://localhost:8100/api/todos/';

	return await axios
		.get(url, {
			headers: {
				'Authorization': `JWT ${token}`
			}
		})
		.then((res) => {
			const result = res.data;
			if (result && result.length !== 0) {
				return result.slice(0, 10);
			}
			return [];
		})
		.catch((error) => {
			console.error(error);
			return [];
		});
};

const getAllTodos = (token) => {
	return http.get('/todos/', headerJWT(token));
};

const getTodo = (id, token) => {
	return http.get(`/todos/${id}/`, headerJWT(token));
};

const createTodo = (data, token) => {
	return http.post('/todos/', data, headerJWT(token));
};

const removeTodo = (id, token) => {
	return http.post(`/todos/${id}/`, headerJWT(token));
};

const updateTodo = (id, data, token) => {
	return http.put(`/todos/${id}/`, data, headerJWT(token));
};

export { getAllTodos, getTodo, createTodo, removeTodo, updateTodo };
