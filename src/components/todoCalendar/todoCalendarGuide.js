
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function TodoCalendarGuide() {
 
    return (
        <div style={{ width: '100%', height: '100%' }}>
            {/* 노션 페이지를 임베드하는 iframe */}
            <iframe src="https://readmind.notion.site/ebd/a2183ee1a41946faa8e0658640fb4c6a" width="100%" height="600" frameborder="0" allowfullscreen />
        </div>
    );
}

export default TodoCalendarGuide;