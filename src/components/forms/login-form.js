import React from 'react'
import { useState } from "react";


const LoginForm = (props) =>{
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    return(
        <form id="cbs-login-form" onSubmit={e => handleSubmit(e, mutation)}>
            <h4 className="text-bold mar-t-3x">LOGIN</h4>

                <label className="form-label">Username</label>
                <Input fluid
                    className="ui form-input"
                    placeholder='Username' type="text"
                    required
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <label className="form-label">Password</label>
                <Input fluid
                    className="ui form-input mar-b-5x"
                    placeholder='Pass..' type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            <button type='submit' positive className="mrt10" id="login-button" loading={loading}>Login</button>
            <div className="bottom-box fbox-c jcfs aic">
                <p className="form-error form-login-error" >{error}</p>
                <p className="redirect-signup">Don't you have account?
                                    <span className="redirect-link" onClick={formSwitcher}> JOIN US</span>
                </p>
            </div>

        </form>
    )
}