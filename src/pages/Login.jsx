import React from 'react'

const Login = () => {
  return (
    <div className="formControl">
            <div className="formWrapper">
                <div className="heading">
                    <h3>Ciao App</h3>
                    <h2>Log In</h2>
                </div>
                <form action="">
                    
                    <div className="input-wrapper">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email"/>
                    </div>
                    <div className="input-wrapper">
                    <label>Password</label>
                        <input type="password" placeholder="Enter your password"/>
                    </div>

                    

                    <button>Log In</button>
                </form>
                <p>You don't have an account? Register</p>
            </div>
        </div>
  )
}

export default Login