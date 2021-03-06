import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'left',
		margin: 'auto',
		padding: '0 1em'
	}
}));

function TodoList(props) {
	const { pendingTodos, updatedTodos } = props;
	const history = useHistory();

	const classes = useStyles();

	// console.log(onlineTodos);
	console.table(pendingTodos);
	const handleLogout = () => {
		localStorage.removeItem('AuthToken');
		history.push('/login');
	};

	// if (JSON.parse(localStorage.getItem('AuthToken')) === undefined) return <Redirect to="/login" />;
	return (
		<Fragment>
			<Typography variant="h4">Online</Typography>
			<Grid container spacing={2}>
				{
					updatedTodos.length !== 0 ? updatedTodos.map((key) => (
						<Fragment key={key.id}>
							<Grid item xs={6}>
								<Paper>
									<CardActionArea>
										<CardContent className={classes.paper}>
											<div>
												<h3>{key.title}: </h3>
												<h1>
													{key.id}: {key.description}
												</h1>
												<h5>{key.owner}</h5>
											</div>
										</CardContent>
									</CardActionArea>
								</Paper>
							</Grid>
						</Fragment>
					)) :
					<h1>You're not connected to the internet</h1>}
			</Grid>
			<br />
			<Typography variant="h4">Offline</Typography>
			<br />
			<Grid container spacing={2}>
				{
					pendingTodos.length !== 0 ? pendingTodos.map((key, index) => (
						<Fragment key={index}>
							<Grid item xs={6}>
								<Paper>
									<CardActionArea>
										<CardContent className={classes.paper}>
											<div>
												<h3>{key.title}: </h3>
												<h1>
													{key.id}: {key.description}
												</h1>
												<h5>{key.owner}</h5>
											</div>
										</CardContent>
									</CardActionArea>
								</Paper>
							</Grid>
						</Fragment>
					)) :
					<Typography>Nothing to see here..</Typography>}{' '}
			</Grid>
			<br />
			<Button variant="contained" onClick={handleLogout}>
				Logout
			</Button>
		</Fragment>
	);
}

export default React.memo(TodoList);
