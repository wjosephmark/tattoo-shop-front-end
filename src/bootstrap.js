import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter";
import App from "./components/app";

import Auth from "./pages/auth"

import "./style/main.scss";


function Main() {
  const [loggedInStatus, setLoggedInStatus] = useState("Not Logged In")
  
  const routes = () => {
    if(loggedInStatus === "Logged In"){
      return({
        "/": () => <App />,
        "/auth": () => <Auth />
      })
    } else {
      return({
        "/": () => <App />,
        "/auth": () => <Auth loggedInStatus={loggedInStatus} setLoggedInStatus={setLoggedInStatus}/>
      })
    }
  }

  const handleSignOut = () => {
    setLoggedInStatus("Not Logged In")
  }

  if(loggedInStatus === "Logged In") {
    return(
      <div>
        <div className="nav-wrapper">
          <div className="nav-link-wrapper">
            <A href="/">Home</A>
          </div>
          <div className="nav-link-wrapper">
            <A href="/auth">Employee Login</A>
          </div>
          <div>
            <button className="btn" onClick={() => handleSignOut()}>Sign Out</button>
          </div>
        </div>
        {useRoutes(routes())}
      </div>
    )
  } else {
    return(
      <div>
        <div className="nav-wrapper">
          <div className="nav-link-wrapper">
            <A href="/">Home</A>
          </div>
          <div className="nav-link-wrapper">
            <A href="/auth">Employee Login</A>
          </div>
        </div>
        {useRoutes(routes())}
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.querySelector(".app-wrapper"))