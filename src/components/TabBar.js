import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { urls as pages } from '../urls';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
	root: {
		width: '100%',
		position: 'fixed',
		bottom: '0em',
		zIndex: 10001,
		backgroundColor: 'rgba(255,255,255,.7)',
		backdropFilter: 'blur(10px)',
		height: '6em'
	},
	child: {
		height: '4em',
		top: '0em'
	}
});

export default function TabBar(props) {
	const [ value, setValue ] = useState(window.location.pathname);
	const classes = useStyles();
	console.log(value);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	// It is a MUST to declare 'value' because the parent will read the value from its children
	// If we don't declare the 'value, they'll use default value, which is index.
	// We want our value var to be pathname, so we declare each child's value with path
	// If we don't declare it, the child will return int as their value and the useState will receive different state type.

	return (
		<Fragment>
			<BottomNavigation value={value} onChange={handleChange} showLabels className={classes.root}>
				{pages.map(({ path, label, icon }, key) => (
					<BottomNavigationAction
						key={key}
						label={label}
						value={path}
						icon={icon}
						component={Link}
						to={path}
						className={classes.child}
					/>
				))}
			</BottomNavigation>
		</Fragment>
	);
}
