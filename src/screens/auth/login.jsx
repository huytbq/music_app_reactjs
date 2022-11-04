import React from 'react'
import { loginEndpoint } from '../../spotify'
import "./login.scss"

export default function Login() {
    return (
        <div className='login-page flex'>
            <a href={loginEndpoint}>
                <div className='login-btn'>LOG IN</div>
            </a>
        </div>
    )
}
