import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom';

function ProtectedRoute({ isAuth: isAuth, component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuth)
                {
                    return <Component props={props} />
                } else
                {
                    return (
                        <Redirect exact to={{ pathname: '/', state: { from: props.location } }} />
                    )
                }

            }}
        />
    )
}

export default ProtectedRoute