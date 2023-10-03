import React from "react";
import Add from "../images/add pic.png"

const Register = () => {
    return (
        <div className="formControl">
            <div className="formWrapper">
                <div className="heading">
                    <h3>Ciao App</h3>
                    <h2>Sign Up</h2>
                </div>
                <form action="">
                    <div className="input-wrapper">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your full name"/>
                    </div>
                    <div className="input-wrapper">
                        <label>Email</label>
                        <input type="email" placeholder="Enter an email"/>
                    </div>
                    <div className="input-wrapper">
                    <label>Password</label>
                        <input type="password" placeholder="Enter a password"/>
                    </div>

                    <div className="input-wrapper">
                        <input style={{display:"none"}} type="file" id="file"/>
                        <label className="profile-pic" htmlFor="file">
                            <img style={{width:"30px", cursor:"pointer"}} src={Add} alt="" />
                            <span>Add Profile Photo</span>
                        </label>
                    </div>

                    <button>Sign Up</button>
                </form>
                <p>Already have an account? Login</p>
            </div>
        </div>
    );
};

export default Register;
