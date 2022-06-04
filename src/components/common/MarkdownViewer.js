
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";


export default function(props) {

    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(props.sourcePath)
        .then((res) => res.text())
        .then((text) => setMarkdown(text))
    }, []);

    return (
        <div className="content">
            <ReactMarkdown children={markdown}/>
        </div>
    )
}