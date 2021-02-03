import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import React, { Fragment, Suspense } from 'react';
import { CssBaseline, ThemeProvider, withWidth } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { HazTheme } from './theme';
import { urls } from './urls';

import Drawer from './components/Drawer';
import TabBar from './components/TabBar';

// PWA IOS
import useIsIOS from './useIsIOS';

const useStyles = makeStyles((theme) => ({
	content: {
		position: 'absolute',
		top: '0em',
		[theme.breakpoints.up('sm')]: {
			position: 'absolute',
			top: '4em'
		},
		width: '100%'
	}
}));

const theme = HazTheme;

const pages = urls;

const FallBackSuspense = () => {
	return <h1>Loading..</h1>;
};
function App(props) {
	const classes = useStyles();

	// PWA IOS
	const { prompt } = useIsIOS();
	return (
		<Fragment>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				{prompt && alert('Install PWA')}
				<Router>
					<Suspense fallback={<FallBackSuspense />}>
						{
							props.width === 'xs' ? <TabBar /> :
							<Drawer />}
						{/* <Hidden smUp />
						<Hidden xsDown>
							<Drawer />
						</Hidden> */}
						<div className={classes.content}>
							{pages.map(({ path, component }, key) => (
								<Route exact path={path} component={component} key={key} />
							))}
						</div>
					</Suspense>
				</Router>
			</ThemeProvider>
		</Fragment>
	);
}

export default withWidth()(App);
