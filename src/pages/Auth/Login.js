import React, { Fragment, useState } from 'react';
import axios from 'axios';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button, Container, Typography } from '@material-ui/core';
import { Redirect, useHistory } from 'react-router-dom';

const urlToken = 'https://hazlazuardi.herokuapp.com/api-token-auth/';
// const urlToken = 'http://localhost:8100/api-token-auth/';
// const urlTodos = 'http://localhost:8100/api/todos/';

function Login() {
	const [ data, setData ] = useState([]);
	const [ value, setValue ] = useState({
		username: '',
		password: ''
	});
	const [ error, setError ] = useState({
		status: false,
		message: ''
	});
	const history = useHistory();

	const handleChange = ({ target }) => {
		setValue((prev) => ({
			...prev,
			[target.name]: target.value
		}));
		console.log(value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setData((prev) => ({
			...prev,
			value
		}));
		await axios
			.post(urlToken, value)
			.then((res) => {
				console.log(res);
				if (res.statusText === 'OK') {
					localStorage.setItem('AuthToken', `${res.data.token}`);
					console.log(`login: ${res.data.token}`);
					history.push('/');
				}
			})
			.catch((err) => {
				setError({
					status: true,
					message: err
				});
			});
	};
	console.table(data);

	if (!localStorage.AuthToken) {
		return (
			<Fragment>
				<form onSubmit={handleSubmit} action="post" noValidate autoComplete="true">
					<Container maxWidth="xs">
						<Typography variant="h4">Login</Typography>
						<br />
						<Paper style={{ padding: '1em' }}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										name="username"
										value={value.username}
										label="Username"
										fullWidth
										onChange={handleChange}
										error={error.status}
										helperText={

												error.status ? 'Please fill the username field' :
												''
										}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										name="password"
										type="password"
										value={value.password}
										label="Password"
										fullWidth
										onChange={handleChange}
										error={error.status}
										helperText={

												error.status ? 'Please fill the password field' :
												''
										}
									/>
								</Grid>
								<Grid item xs={12} variant="primary">
									<Button variant="contained" type="submit">
										Submit
									</Button>
								</Grid>
							</Grid>
						</Paper>
					</Container>
				</form>
			</Fragment>
		);
	} else {
		alert('Youre logged in');
		return <Redirect to="/" />;
	}
}
export default Login;
