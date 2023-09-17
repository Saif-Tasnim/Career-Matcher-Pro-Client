import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const auth = getAuth(app);

    const userCreate = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const profileUpdate = (name) => {
        return updateProfile(auth.currentUser , {
            displayName: name,
        })
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscriber()
    }, [])

    const userInfo = {
        user,
        loading,
        userCreate,
        profileUpdate,
        logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;