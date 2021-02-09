import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import {useHistory} from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function today() {
	const dateObj = new Date();
	let dd = String(dateObj.getDate()).padStart(2, '0');
	var mm = String(dateObj.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = dateObj.getFullYear();
	let str = yyyy + '-' + mm + '-' + dd;
	return str;
}

function Prayer() {
	const [ data, setData ] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const history = useHistory();

	const dataKeys = {
		ashar: {
			title: 'Ashar',
			color: 'green'
		},
		dhuha: {
			title: 'Dhuha',
			color: 'red'
		},
		dzuhur: {
			title: 'Dzuhur',
			color: 'blue'
		},
		imsak: {
			title: 'Imsak',
			color: 'rgba(0,0,0,0.5)'
		},
		isya: {
			title: 'Isya',
			color: 'rgba(0,0,0,0.5)'
		},
		maghrib: {
			title: 'Maghrib',
			color: 'black'
		},
		subuh: {
			title: 'Subuh',
			color: 'black'
		},
		tanggal: {
			title: 'Tanggal',
			color: 'black'
		},
		terbit: {
			title: 'Terbit',
			color: 'black'
		}
	};

	useEffect(() => {
		const options = {
			method: 'GET',
			url: `https://api.banghasan.com/sholat/format/json/jadwal/kota/700/tanggal/${today()}`
		};
		const prayerData = JSON.parse(localStorage.getItem('PrayerData'));
		const prayerUpdate = localStorage.getItem('PrayerUpdate');

		const updateLocalCovidData = (data, update) => {
			localStorage.setItem('PrayerData', JSON.stringify(data));
			localStorage.setItem('PrayerUpdate', update);
		};

		if (today() !== prayerUpdate) {
			console.log('new Fetch');
			axios
				.request(options)
				.then((res) => {
					updateLocalCovidData(res.data.jadwal.data, today());
					if (prayerData) {
						setData(prayerData);
						setIsLoading(false);
					}
				})
				.catch((err) => {
					alert('timeout');
					localStorage.clear();
					history.push('/');
				});
		} else {
			console.log('old Fetch');
			setData(prayerData);
			setIsLoading(false);
		}
	}, [history]);


	console.log(data);

	return (
		<Fragment>
			<Container>
				<br />
				<Typography variant="h3">Jadwal Sholat</Typography>
				<br />
				<br />
				<Grid container spacing={1}>
					<Grid item xs>
						<Grid container spacing={1}>
							{!isLoading ? Object.keys(data).map((key, index) => (
								<Fragment key={index}>
									<Grid item xs>
										<Paper>
											<CardActionArea>
												<CardContent>
													<div>
														<h5>{dataKeys[key].title}: </h5>
														<h1 style={{ color: dataKeys[key].color }}>{data[key]}</h1>
													</div>
												</CardContent>
											</CardActionArea>
										</Paper>
									</Grid>
								</Fragment>
							)) : <p>Loading...</p>}
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	);
}

export default Prayer;
