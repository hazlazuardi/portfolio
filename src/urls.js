import React, { lazy } from 'react';

import HomeIcon from '@material-ui/icons/Home';
import GrainIcon from '@material-ui/icons/Grain';
import TimeLapseIcon from '@material-ui/icons/Timelapse';

const Landing = lazy(() => import('./pages/Landing/Landing'));
const Covid = lazy(() => import('./pages/Covid/Covid'));
const Prayer = lazy(() => import('./pages/Prayer/Prayer'));
export const urls = [
	{
		id: 0,
		label: 'Home',
		path: '/',
		component: Landing,
		icon: <HomeIcon />
	},
	{
		id: 1,
		label: 'Covid-19',
		path: '/Covid',
		component: Covid,
		icon: <GrainIcon />
	},
	{
		id: 2,
		label: 'Prayer Time',
		path: '/Prayer',
		component: Prayer,
		icon: <TimeLapseIcon />
	}
];
