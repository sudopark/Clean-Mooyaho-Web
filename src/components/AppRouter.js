

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import Welcome from "./welcomes/Welcome";
import TodoCalendarGuide from "./todoCalendar/todoCalendarGuide";
import TodoCalendarPrivacyPolicy from "./todoCalendar/privacyPolicy";
import GoogleCalendarIntegration from "./todoCalendar/googleCalendarIntegration";

class AppRouter extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Routes>
                            <Route path="/welcome" element={<Welcome/>}/>
                            <Route path="/" element={<App/>}/>
                            <Route path="/todo-calendar" element={<TodoCalendarGuide />} />
                            <Route path="/todo-calendar/privacy-policy" element={<TodoCalendarPrivacyPolicy />} />
                            <Route path="/todo-calendar/google-calendar-integration-data-policy" element={<GoogleCalendarIntegration />} />
                        </Routes>
                    </div>
                </Router>
            </div>
        );
    }
}

export default AppRouter;