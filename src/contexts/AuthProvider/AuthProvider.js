import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword,signInWithPopup, signInWithEmailAndPassword,onAuthStateChanged,signOut, getAuth} from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);


const providerLogin = (provider) =>{
    return signInWithPopup(auth, provider)
}

 const createUser = (email, password) =>{
   setLoading(true);
    return createUserWithEmailAndPassword( auth, email, password);
 }

 const signIn = (email, password) =>{
   setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
 }

 const logOut = () =>{
    return signOut(auth);
 }

useEffect(() =>{
      const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
     });

     return () =>{
        return unsubscribe();
     }
},[] )

 const authInfo = {user, loading,providerLogin, createUser, signIn, logOut }


    return (
     <AuthContext.Provider value={authInfo}>
        {children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;