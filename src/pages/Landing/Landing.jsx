import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import AfterlifeImg from '../../media/img/afterlife.webp';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Import using React lazy() to code-splitting, improving initial load performance

const useStyles = makeStyles((theme) => ({
	gridPic: {},
	gridText: {},
	afterlifeImg: {},
	section: {
		position: 'relative',
		top: '-4em',
		height: 'calc(100vh - 0em)'
	},
	[theme.breakpoints.down('xs')]: {
		section: {
			top: '0em',
			height: 'calc(100vh - 5em)'
		}
	}
}));

const image = AfterlifeImg;

function Landing(props) {
	const classes = useStyles();

	console.log(props.width);
	return (
		<div>
			<Grid container className={classes.section}>
				<Grid className={classes.gridPic} item xs={12} sm={7}>
					<Box flexShrink={1} display="flex" justifyContent="center" alignItems="center" minHeight="100%">
						<Container>
							<Paper elevation={6}>
								<CardMedia style={{ height: 0, paddingTop: '56.25%' }} image={image} />
							</Paper>
						</Container>
					</Box>
				</Grid>
				<Grid className={classes.gridText} item xs={12} sm={5}>
					<Box
						textAlign={

								props.width === 'xs' ? 'center' :
								'left'
						}
						flexShrink={2}
						display="flex"
						justifyContent="flex-start"
						alignItems="center"
						minHeight="100%"
					>
						<Container>
							<Typography variant="h4">The Afterlife</Typography>
							<Typography>Melasti Beach, Bali</Typography>
							<br />
							<Button variant="contained" color="primary">
								My Works
							</Button>
						</Container>
					</Box>
				</Grid>
			</Grid>
			<Divider />
			<Grid container className={classes.section}>
				<Grid className={classes.gridPic} item xs={12} sm={6}>
					<Box display="flex" justifyContent="center" alignItems="center" minHeight="100%">
						<Typography>Hello World!</Typography>
					</Box>
				</Grid>
				<Grid className={classes.gridText} item xs={12} sm={6}>
					<Box display="flex" justifyContent="center" alignItems="center" minHeight="100%">
						<Typography>Ini Gambar</Typography>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
}

export default withWidth()(Landing);
