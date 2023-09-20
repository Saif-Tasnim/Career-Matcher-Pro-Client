import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";
import ProgresBar from "../components/common/ProgresBar/ProgresBar";

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
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            if (currentUser) {
                axios.post('http://localhost:5000/jwt', { email: currentUser?.email })
                    .then(data => {

                        // console.log(data.data.token);
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false);
                    })

            }

            else {
                localStorage.removeItem("access-token");

            }
        })

        return () => unsubscriber();
    }, [])

    const userInfo = {
        user,
        loading,
        userCreate,
        profileUpdate,
        login,
        logOut
    }

    if (loading) {
        return <ProgresBar></ProgresBar>
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;