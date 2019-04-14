import React, { useEffect } from "react";
import "./App.css";
import logo from "../assets/logo.svg";
//import { app, appHeader, appLink } from "./styles";
import text from "../assets/test.ryan";
import AppLogo from "./AppLogo";

export default () => {
    useEffect(() => {
        document.body.style.margin = 0;
        document.body.style.padding = 0;
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* <AppLogo src={logo} alt="logo" reverse={false} />
                <AppLogo src={logo} alt="logo" reverse={true} /> */}
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <p>{text}</p>
            </header>
        </div>
    );
};

//   <div className="App" style={app}>
//     <header className="App-header" style={appHeader}>
//         <p>
//             Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//             className="App-link"
//             style={appLink}
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//         >
//             Learn React
//         </a>
//     </header>
// </div>
