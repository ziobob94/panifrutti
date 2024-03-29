import React, {useCallback, useEffect, useState} from "react";
import {authFB} from "../../../firebase/configs/firebase.config";
import {loginWithEmailAndPassword, setUserToken} from "../../store/actions/firebase-actions/firebaseActionsRdx";
import {selectView} from "../../store/actions/rootActions";
import {useDispatch} from "react-redux";
import {UserCredential} from "@firebase/auth-types";

type AccessCredentials = {
    email: string,
    password: string,
}

const Login : React.FC = () => {
    const [credentials,setCredentials] = useState<AccessCredentials>({
        email : "",
        password: "",
    });

    let dispatch = useDispatch();

    let handleChange = useCallback((e)=>{
        e.preventDefault();
        setCredentials(
            {
                ...credentials,
                [e.target.id]: e.target.value
            }
        );
    },[credentials])

    let handleView = useCallback(()=>{
        dispatch(selectView("categories"));
    },[])


    let handleSubmit = useCallback( (e) => {
        e.preventDefault();
        console.log("CIAO")
        dispatch(loginWithEmailAndPassword(credentials));
    },[credentials]);

    return (
        <div className="Content-wrapper" id="login-wrapper">
            <div className="FormWrapper">
                <form className="My-form" id="login-Form" onSubmit={handleSubmit}>
                    <h3 className="TitlePage"> LOGIN </h3>
                    <div className="MyFormEl-wrapper">
                        <label htmlFor="username">Email</label>
                        <input type="username" id="email" onChange={handleChange} required={true}/>
                    </div>
                    <div className="MyFormEl-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={handleChange} required={true}/>
                    </div>

                    <div className="MyFormEl-wrapper">
                        <button>LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;