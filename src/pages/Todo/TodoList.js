import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Redirect, useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'left',
		margin: 'auto',
		padding: '0 1em'
	}
}));

function Todo(props) {
	const { data } = props;
	const history = useHistory();
	const classes = useStyles();

	console.log(data);
	const handleLogout = () => {
		localStorage.removeItem('AuthToken');
		history.push('/Todo');
	};

	if (!localStorage.AuthToken) return <Redirect to="/login" />;
	return (
		<Fragment>
			<Container>
				<br />
				<Typography variant="h3">Todo</Typography>
				<br />
				<br />
				<Grid container spacing={2}>
					{data.map((key, index) => (
						<Fragment key={index}>
							<Grid item xs={6}>
								<Paper>
									<CardActionArea>
										<CardContent className={classes.paper}>
											<div>
												<h5>{key.title}: </h5>
												<h1>{key.description}</h1>
											</div>
										</CardContent>
									</CardActionArea>
								</Paper>
							</Grid>
						</Fragment>
					))}
				</Grid>
				<Button onClick={handleLogout}>Logout</Button>
			</Container>
		</Fragment>
	);
}

export default Todo;
