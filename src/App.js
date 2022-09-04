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
    constructor (props) {
        super(props)
        this.state = {
            height: "max-content",
            width: "max-content",
            opened: true,
        }
        this.updateState = this.updateState.bind(this)
    }

    goToFacPage () {
        document.location = "./#/faculty";
    }
    goToHomePage () {
        document.location = "./#/home";
    }

    updateState() {
        if (this.state.opened) {
            this.setState({
                height: "400px",
                width: "100%",
                display: "flex",
                opened: false,
            });
        } else {
            this.setState({
                height: "40px",
                width: "60px",
                display: "none",
                opened: true,
            });
        }
    }

    render() {
        return (
            <div>
                <div id="ocHandler" onClick={this.updateState}></div>
                <div id="nav-bar" style={{"height": this.state.height, "width": this.state.width, "display": this.state.display}}>
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