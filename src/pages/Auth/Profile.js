import React, { Fragment, lazy, Suspense } from 'react';
import Typography from '@material-ui/core/Typography';
import { Redirect, BrowserRouter as Router, Switch, Route, useHistory, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Login = lazy(() => import('./Login'));
const Signup = lazy(() => import('./Signup'));

function Profile() {
	// Get Authtoken to see if the user is authenticated
	const authToken = localStorage.getItem('AuthToken');

	// Component when waiting to load
	const FallBackSuspense = () => {
		return <h1>Loading..</h1>;
	};

    // Component if user isn't logged in
    const IsntLoggedIn = () =>{
        return(
            <Fragment>
                <Typography variant='h3'>
                    You're not logged in
                </Typography>
                <Button color='primary' variant='contained' href='/login' >
                    Login
                </Button>
            </Fragment>
        )
    }

	return (
		<Fragment>
			{
                authToken ? <h1>Hello</h1> : <IsntLoggedIn />
            }
		</Fragment>
	);
}

export default Profile;
