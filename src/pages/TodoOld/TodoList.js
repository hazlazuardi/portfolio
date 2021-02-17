import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {  useHistory } from 'react-router-dom';

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
	const {onlineTodos, offlineTodos, keysToClear} = props;
	const history = useHistory();

	const classes = useStyles();

	console.log(onlineTodos);
	console.log(offlineTodos)
	const handleLogout = () => {
		keysToClear.forEach(k=>localStorage.removeItem(k))
		history.push('/login');
	};


	// if (JSON.parse(localStorage.getItem('AuthToken')) === undefined) return <Redirect to="/login" />;
	return (
		<Fragment>
			<Container>
				<br />
				<Typography variant="h3">Todo</Typography>
				<br />
				<br />
				<Typography variant="h4">Online</Typography>
				<Grid container spacing={2}>
					{onlineTodos.filter((key) => key.online).map((key) => (
						<Fragment key={key.id}>
							<Grid item xs={6}>
								<Paper>
									<CardActionArea>
										<CardContent className={classes.paper}>
											<div>
												<h3>{key.title}: </h3>
												<h1>{key.description}</h1>
												<h5>{key.owner}</h5>
											</div>
										</CardContent>
									</CardActionArea>
								</Paper>
							</Grid>
						</Fragment>
					))}
				</Grid>
			</Container>
			<br />
			{/* <Container>
				<Typography variant="h4">Offline</Typography>
				<Grid container spacing={2}>
				{JSON.parse(localStorage.getItem('LocalTodos')).filter((key) => key.owner !== localStorage.getItem('CurrentUser')).map((key, index) => (
						<Fragment key={key.id || index}>
							<Grid item xs={6}>
								<Paper>
									<CardActionArea>
										<CardContent className={classes.paper}>
										<div>
												<h3>{key.title}: </h3>
												<h1>{key.description}</h1>
												<h5>{key.owner}</h5>
											</div>
										</CardContent>
									</CardActionArea>
								</Paper>
							</Grid>
						</Fragment>
					))}

				</Grid>
			</Container> */}
			<br />
			<Container>
				<Button variant="contained" onClick={handleLogout}>
					Logout
				</Button>
			</Container>
		</Fragment>
	);
}

export default React.memo(TodoList);
