import React from "react";
import Box from "./Homepage";
import FacPage from "./FacPage";
import "./App.css";
import {
    BrowserRouter,
    Route,
    Link,
    Routes,
    HashRouter,
  } from "react-router-dom";

class Button extends React.Component {
    goToFacPage () {
        document.location = "./#/faculty";
    }
    goToHomePage () {
        document.location = "./#/home";
    }

    render() {
        return (
            <div id="nav-bar">
                <div className="navs" id="faculty" onClick={this.goToFacPage}>
                    Faculty
                </div>
                <div className="navs" id="academics">
                    Academics
                </div>
                <div className="navs" id="contact">
                    Contact
                </div>
                <div className="navs default" id="home" onClick={this.goToHomePage}>
                    Home
                </div>
            </div>
        )
    }
}

class Template extends React.Component {
    render() {
        return (
            <div id="container">
                <div id="header">
                    < Button />
                    <div id="logo"></div>
                </div>
                {/* <BrowserRouter> */}
                    <HashRouter>
                        <Routes>
                            <Route path="/home" element={ < Box /> } ></Route>
                            <Route path="/faculty" element={ < FacPage /> } ></Route>
                        </Routes>
                    </HashRouter>
                {/* </BrowserRouter> */}
                <div id="footer">
                    <div className="footItem">
                        <p className="fhead">Address</p>
                        {/* <span id="location"></span> */}
                        Jasper Hostel, Block A, Room - 450, IIT(ISM) Dhanbad, Jharkhand, India    
                    </div>
                    <div className="footItem">
                        <p className="fhead">Mobile</p>
                        020-123456789, 9012345678   
                    </div>
                    <div className="footItem">
                        <p className="fhead">E-mail</p>
                        physicsphysics@iitism.ac.in  
                    </div>
                </div>
            </div>
        )
    }
}

export default Template;