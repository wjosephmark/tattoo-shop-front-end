import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter";
import App from "./components/app";

import Icons from "./components/helpers/icons"

import Auth from "./pages/auth"
import Artists from "./pages/artists"
import Bookings from "./pages/bookings"
import Contact from "./pages/contact"


import "./style/main.scss";


function Main() {
  // const [loggedInStatus, setLoggedInStatus] = useState("Not Logged In")

  Icons()

  const [loggedInStatus, setLoggedInStatus] = useState("Logged In")
  
  const routes = () => {
    if(loggedInStatus === "Logged In"){
      return({
        "/": () => <App />,
        "/artists": () => <Artists />,
        "/bookings": () => <Bookings />,
        "/contact": () => <Contact />,
        "/auth": () => <Auth loggedInStatus={loggedInStatus} setLoggedInStatus={setLoggedInStatus}/>

      })
    } else {
      return({
        "/": () => <App />,
        "/artists": () => <Artists />,
        "/bookings": () => <Bookings />,
        "/contact": () => <Contact />,
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
            <A href="/artists">Artists</A>
          </div>

          <div className="nav-link-wrapper">
            <A href="/bookings">Bookings</A>
          </div>

          <div className="nav-link-wrapper">
            <A href="/contact">Contact</A>
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
            <A href="/artists">Artists</A>
          </div>

          <div className="nav-link-wrapper">
            <A href="/bookings">Bookings</A>
          </div>

          <div className="nav-link-wrapper">
            <A href="/auth">Employee Login</A>
          </div>

          <div className="nav-link-wrapper">
            <A href="/contact">Contact</A>
          </div>

        </div>
        {useRoutes(routes())}
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.querySelector(".app-wrapper"))