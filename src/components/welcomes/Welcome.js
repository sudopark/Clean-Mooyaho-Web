

import React from "react";
import page0 from "../../markdowns/welcome-index.md"
import page1 from "../../markdowns/welcome-add-item.md"
import MarkdownViewer from "../common/MarkdownViewer";

class Welcome extends React.Component {

    render() {
        return (
            <>
            <MarkdownViewer sourcePath={page0}/>
            <div>------------</div>
            <MarkdownViewer sourcePath={page1}/>
            </>
        );
    }
}


export default Welcome;