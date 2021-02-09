import axios from 'axios';

// const url = 'http://localhost:8100/api';
const url = 'https://hazlazuardi.herokuapp.com/api';

export default axios.create({
	baseURL: url,
	headers: {
		'Content-type': 'application/json'
	}
});
