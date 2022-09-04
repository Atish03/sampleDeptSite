import Template from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
// import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import "./index.css";

class Main extends React.Component {
    render() {
        return (
            // <Router>
            // <Routes>
            //     <Route path="*" element={ < Template /> } ></Route>
            // </Routes>
            // </Router>
            < Template />
        )
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< Main />);