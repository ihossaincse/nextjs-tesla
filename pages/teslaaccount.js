import Router from 'next/router';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import db from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from '../StateProvider';

const Teslaaccount = () => {
    const [signIn, setSignIn] = useState(true);
    const [state, dispatch] = useStateValue();
    const [error, setError] = useState("");

    const handleForm = (type, e) => {
        e.preventDefault();
        if(type === "signin") {
            const email = e.target[0].value;
            const password = e.target[1].value;
            db.collection("users").onSnapshot(snapshot => snapshot.docs.map(doc => {
                let email2 = doc.data().email;
                let password2 = doc.data().password;
                if((email === email2) && (password === password2)) {
                    dispatch({
                        type: actionTypes.LOGGED_IN,
                        user: true
                    })
                    setError("");
                    Router.push('/dashboard');
                } else {
                    setError("Wrong username/password!");
                }
            }))
        } else if(type === "signup") {
            const fname = e.target[0].value;
            const lname = e.target[1].value;
            const email = e.target[2].value;
            const password = e.target[3].value;
            db.collection("users").add(
                {
                  fname: fname,
                  lname: lname,
                  email: email,
                  password: password
                }
            );
            setSignIn(true);
        }
    }
    
    return (
        <Layout>
            {signIn === true ?
                <SignIn setSignIn={setSignIn} handleForm={handleForm} error={error} /> : <SignUp setSignIn={setSignIn} handleForm={handleForm} /> 
            }
        </Layout>
    )
}

export default Teslaaccount
