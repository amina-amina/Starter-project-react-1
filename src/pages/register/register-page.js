import React, { Component } from 'react'
import "../../assets/main.css"
import background from "../../assets/bg-01.jpg";
import { Link } from 'react-router-dom';
export default class RegisterPage extends Component {
    render() {
        return (
<div className="limiter">
  <div className="container-login100">
    <div className="login100-more" style={{ backgroundImage: `url(${background})` }} />
    <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
      <form className="login100-form validate-form">
        <span className="login100-form-title p-b-59">
          Sign Up
        </span>
        <div className="wrap-input100 validate-input" data-validate="Name is required">
          <span className="label-input100">Full Name</span>
          <input className="input100" type="text" name="name" placeholder="Name..." />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
          <span className="label-input100">Email</span>
          <input className="input100" type="text" name="email" placeholder="Email addess..." />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input alert-validate" data-validate="Username is required">
          <span className="label-input100">Username</span>
          <input className="input100" type="text" name="username" placeholder="Username..." />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input" data-validate="Password is required">
          <span className="label-input100">Password</span>
          <input className="input100" type="text" name="pass" placeholder="*************" />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input" data-validate="Repeat Password is required">
          <span className="label-input100">Repeat Password</span>
          <input className="input100" type="text" name="repeat-pass" placeholder="*************" />
          <span className="focus-input100" />
        </div>
        <div className="flex-m w-full p-b-33">
          <div className="contact100-form-checkbox">
            <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
          </div>
        </div>
        <div className="container-login100-form-btn">
          <div className="wrap-login100-form-btn">
            <div className="login100-form-bgbtn" />
            <button className="login100-form-btn">
              Sign Up
            </button>
          </div>
          <Link to="/admin" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30 text-center">Sing In</Link>
        </div>
      </form>
    </div>
  </div>
</div>
        )
    }
}


