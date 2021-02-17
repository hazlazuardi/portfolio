import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';

function today() {
	const dateObj = new Date();
	let dd = String(dateObj.getDate()).padStart(2, '0');
	var mm = String(dateObj.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = dateObj.getFullYear();
	let str = yyyy + '-' + mm + '-' + dd;
	return str;
}

const useStyles = makeStyles(() => ({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'left',
		margin: 'auto',
		padding: '0 1em'
	}
}));

function Covid() {
	const classes = useStyles();

	const [ data, setData ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);

	const history = useHistory();

	const dataKeys = {
		recovered: {
			title: 'Recovered',
			color: 'green'
		},
		deaths: {
			title: 'Deaths',
			color: 'red'
		},
		confirmed: {
			title: 'Case Confirmed',
			color: 'blue'
		},
		lastChecked: {
			title: 'Last Checked',
			color: 'rgba(0,0,0,0.5)'
		},
		lastReported: {
			title: 'Last Reported',
			color: 'rgba(0,0,0,0.5)'
		},
		location: {
			title: 'Location',
			color: 'black'
		}
	};

	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total',
			params: { country: 'Indonesia' },
			headers: {
				'x-rapidapi-key': '5a78f7e36bmsh9d1a51dd9f68cc4p12c7a2jsn492ba90ee3f4',
				'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
			}
		};
		const covidData = JSON.parse(localStorage.getItem('CovidData'));
		const covidUpdate = localStorage.getItem('CovidUpdate');

		const updateLocalCovidData = (data, update) => {
			localStorage.setItem('CovidData', JSON.stringify(data));
			localStorage.setItem('CovidUpdate', update);
		};

		if (today() !== covidUpdate) {
			console.log('new Fetch');
			axios
				.request(options)
				.then((res) => {
					updateLocalCovidData(res.data.data, today());
					if (JSON.parse(localStorage.getItem('CovidData'))) {
						setData(JSON.parse(localStorage.getItem('CovidData')));
						setIsLoading(false);
					}
				})
				.catch((err) => {
					alert('timeout');
					history.push('/');
				});
		} else {
			console.log('old Fetch');
			setData(covidData);
			setIsLoading(false);
		}
	}, [history]);

	console.log(`data final: `);
	console.log(data);
	return (
		<Fragment>
			<Container>
				<br />
				<Typography variant="h3">Covid 19 Case</Typography>
				<br />
				<br />
				<Grid container spacing={1}>
					<Grid item xs>
						<Grid container spacing={2}>
							{
								!isLoading ? Object.keys(data).map((key, index) => (
									<Fragment key={index}>
										<Grid item xs>
											<Paper>
												<CardActionArea>
													<CardContent className={classes.paper}>
														<div>
															<h5>{dataKeys[key].title}: </h5>
															<h1 style={{ color: dataKeys[key].color }}>{data[key]}</h1>
														</div>
													</CardContent>
												</CardActionArea>
											</Paper>
										</Grid>
									</Fragment>
								)) :
								<p>Loading...</p>}
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	);
}

export default Covid;
