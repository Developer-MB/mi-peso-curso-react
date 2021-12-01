import React from "react"
import logo from '../assets/img/react.png'
import '../App.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="left">
                        <img src={logo} alt="" className="logo" />
                    </a>
                    <a href="/" className="center titulo">
                        Mi Registro de Peso
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">Sass</a></li>
                        <li><a href="/">Components</a></li>
                        <li><a href="/">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}