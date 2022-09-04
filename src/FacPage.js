import React from "react";
import "./FacPage.css"

class FacPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            members: ["1", "2", "3"].map((members) => 
                <div className="member" id={`member${members}`} onLoad={this.handle}></div>
            ),
        }
    }

    handle() {
        const ele = document.getElementById("member1");
        ele.innerHTML = "hello";
    }

    render() {
        return (
            <div id="members">
                {this.state.members}
            </div>
        )
    }
}

export default FacPage;