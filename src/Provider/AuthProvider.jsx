import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser]= useState(null);
    const [loading,setLoading] = useState(true);
    console.log(user);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })

        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        signInWithGoogle,
        createUser,
        signOutUser,
        user,
        setUser,
        loading,
        setLoading,
    }
    return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;