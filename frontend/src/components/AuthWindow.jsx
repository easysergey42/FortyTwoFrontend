import React from 'react';
import {Button} from "react-bootstrap";
import "../styles/LoginPage.css"
import {useDispatch} from "react-redux";
import {setIsAuth} from "../store/actions/setIsAuth";
import {useNavigate} from "react-router-dom";

const AuthWindow = () => {

    return (
        <div className="Login-wrapper">
            <div className="Login-content">
                <h2>Аутентификация</h2>
                <p style={{color:"black"}}>Данный сайт предназначен для избранных. Покиньте сайт прямо сейчас.</p>
                <a
                    href={"http://sidrDetyam.com:8080/v1/oauth2"}
                    // onClick={handleVKLogin}
                    className="age-verification-button-enter">
                    <div className="age-verification-button-enter-before">
                    </div>
                    <span>Войти через ВК</span>
                </a>
            </div>
        </div>
    );
};

export default AuthWindow;