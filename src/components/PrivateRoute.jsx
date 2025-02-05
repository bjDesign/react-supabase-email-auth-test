import React from 'react'
import { UserAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ( {children} ) => {

    const { session } = UserAuth();

    //prevents any flickering
    if(session === undefined) {
        return <p>Loading...</p>;
    }

    return <>
        {session ? <>{children}</> : <Navigate to="/signin" />}
    </>

}
