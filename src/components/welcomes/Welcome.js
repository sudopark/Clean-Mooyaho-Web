

import React from "react";


class Welcome extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>hello world: {this.props.lang}</div>
        );
    }
}


export default Welcome;