import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'AW-10794988153'
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(<App />, document.getElementById("root"));