import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';

import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'left',
		margin: 'auto',
		padding: '0 1em'
	}
}));

function Todo() {
	const [ data, setData ] = useState([]);

	const classes = useStyles();

	useEffect(() => {
		let mounted = true;
		const options = {
			method: 'GET',
			url: 'https://hazlazuardi.herokuapp.com/api/todos'
		};
		axios
			.request(options)
			.then(function(response) {
				if (mounted) {
					console.table(response.data);
					setData(response.data);
				}
			})
			.catch(function(error) {
				console.error(error);
			});

		return () => {
			mounted = false;
		};
	}, []);

	return (
		<Fragment>
			<Container>
				<br />
				<Typography variant="h3">Todo</Typography>
				<br />
				<br />
				<Grid container spacing={1}>
					<Grid item xs>
						<Grid container spacing={2}>
							{data.map((key, index) => (
								<Fragment key={index}>
									<Grid item xs>
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
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	);
}

export default Todo;
