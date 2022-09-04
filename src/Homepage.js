import React from "react";
import "./Homepage.css"

class Box extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            notice: ["This is sample Notice one", "This is sample Notice two"].map((notice) => 
                <li>{notice}</li>
            ),
        };
    }

    getWords(len) {
        var words =["The sky", "above", "the port","was", "the color of television", "tuned", "to", "a dead channel", ".", "All", "this happened", "more or less","." ,"I", "had", "the story", "bit by bit", "from various people", "and", "as generally", "happens", "in such cases", "each time", "it", "was", "a different story","." ,"It", "was", "a pleasure", "to", "burn"];
        var text = [];
        var x = len;
        while(--x) text.push(words[Math.floor(Math.random() * words.length)]);
        return text;
    }

    render() {
        return (
            <div id="main">
                <div id="about">
                    <div className="head">
                        ABOUT
                    </div>
                    <div id="image-gallery"></div>
                    <div className="text">
                        {this.getWords(50)}
                    </div>
                </div>
                <div id="notice">
                    <div className="head">
                        NOTICE
                    </div>
                    <div id="notices">
                        <ul>
                            {this.state.notice}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Box;