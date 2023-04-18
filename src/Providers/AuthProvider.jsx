import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
     


    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const userData = {
        user,
        createUser,
    }


    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;