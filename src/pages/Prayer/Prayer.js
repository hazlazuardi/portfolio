import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

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
		let mounted = true;
		const options = {
			method: 'GET',
			url: `https://api.banghasan.com/sholat/format/json/jadwal/kota/700/tanggal/${today()}`
		};

		axios
			.request(options)
			.then(function(response) {
				if (mounted) {
					console.table(response.data.jadwal.data);
					setData(response.data.jadwal.data);
				}
			})
			.catch(function(error) {
				console.error(error);
			});
		return () => {
			mounted = false;
		};
	}, []);

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
							{Object.keys(data).map((key, index) => (
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
							))}
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	);
}

export default Prayer;
