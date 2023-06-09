import {Link, useParams} from "react-router-dom";
import React from "react";

function WelcomeComponent() {
    const {username} = useParams();
    return <div className={"Welcome container"}>

        <h1>Welcome {username}</h1>
        <h2>Manage todos - <Link to={'/todos'}> Go here</Link> </h2>
    </div>
}
export default WelcomeComponent