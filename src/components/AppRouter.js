

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import Welcome from "./welcomes/Welcome";

class AppRouter extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Routes>
                            <Route path="/welcome/ko" element={<Welcome lang="ko"/>}/>
                            <Route path="/welcome/en" element={<Welcome lang="en"/>}/>
                            <Route path="/" element={<App/>}/>
                        </Routes>
                    </div>
                </Router>
            </div>
        );
    }
}

export default AppRouter;