import React from "react";
import { LoginTypes } from "./login.types";
import './loginStyle.css'

const Login = ()=> {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <div className="wrap-input">
              <input type="email" className= "input"/>
              <span className="focus-input" data-placeholder="E-MAIL"></span>
            </div>

            <div className="wrap-input">
              <input type="password" className= "input"/>
              <span className="focus-input" data-placeholder="SENHA"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            
            <p className="txt1">Não tem uma conta? <a className="txt2" href="/cadastro">Cadastre-se</a></p>
          

          </form>
        </div>
      </div>
    </div>

);
}

export default Login;