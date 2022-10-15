import React from "react";
import '../Login/loginStyle.css'

const Registration = ()=> {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <div className="wrap-input">
              <input type="email" className= "input"/>
              <span className="focus-input" data-placeholder="USUARIO"></span>
            </div>

            <div className="wrap-input">
              <input type="password" className= "input"/>
              <span className="focus-input" data-placeholder="MAIL"></span>
            </div>

            <div className="wrap-input">
              <input type="password" className= "input"/>
              <span className="focus-input" data-placeholder="SENHA"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">CADASTRAR</button>
            </div>

          </form>
        </div>
      </div>
    </div>

);
}

export default Registration;