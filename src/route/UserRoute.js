import React from 'react';
import { Route, Redirect } from 'react-router-dom';



function UserRoute({ component: Component, ...rest }) {
    
    const token = localStorage.getItem('token');
    return (
        <Route
            {...rest}
            render={({ location }) =>
                token ? (
                    <Component {...location} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default UserRoute;