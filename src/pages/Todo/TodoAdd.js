import React, { Fragment} from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button, Container, Typography } from '@material-ui/core';
// import { Redirect, useHistory } from 'react-router-dom';

function TodoAdd(props) {
	const {handleChange, handleSubmit, todo} = props;

	

	return (
		<Fragment>
		<form onSubmit={handleSubmit} action="post" noValidate autoComplete="true">
			<Container maxWidth="xs">
				<Typography variant="h4">Add Todo</Typography>
				<br />
				<Paper style={{ padding: '1em' }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								name="title"
								value={todo.title}
								label="Title"
								fullWidth
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								name="description"
								value={todo.description}
								label="Description"
								fullWidth
								onChange={handleChange}
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
}

export default TodoAdd;

