import React, {Component} from "react";
import {Helmet} from "react-helmet";
import "./../login/vendor/bootstrap/css/bootstrap.min.css";
import "./../login/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./../login/vendor/animate/animate.css";
import "./../login/vendor/css-hamburgers/hamburgers.min.css";
import "./../login/vendor/select2/select2.min.css";
import "./../login/css/util.css";
import "./../login/css/main.css";
import logo from "./../login/images/img-01.png"

function Pole() {
    return <div className="limiter">
        <div className="container-login100">
            <div className="wrap-login100">
                <div className="login100-pic js-tilt" data-tilt>
                    <img src={logo} alt="IMG"/>
                </div>

                <form className="login100-form validate-form" method="post" action="/src/loginogin">
					<span className="login100-form-title">
						Member Login
					</span>

                    <div className="wrap-input100 validate-input"
                         data-validate="Valid email is required: ex@abc.xyz">
                        <input className="input100" type="text" name="user[email]" placeholder="Email"/>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                        <input className="input100" type="text" name="user[password]" placeholder="text"/>
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
                    </div>

                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn">
                            Login
                        </button>
                    </div>

                    <div className="text-center p-t-12">
						<span className="txt1">
							Forgot
						</span>
                        <a className="txt2" href="#help">
                            Username / Password?
                        </a>
                    </div>

                    <div className="text-center p-t-136">
                        <a className="txt2" href="signup">
                            Create your Account
                            <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default Pole;