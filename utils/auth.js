import React, { useState, useEffect, useContext, createContext } from 'react'
import firebase from './firebase'

const authContext = createContext();

export function AuthProvider({ children }) {
    const auth = getAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

export const getAuth = () => {
    return useContext(authContext)
}