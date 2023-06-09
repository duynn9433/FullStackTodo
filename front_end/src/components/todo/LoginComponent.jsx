import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "./security/AuthContext";

function LoginComponent() {
    const [username, setUsername] = useState("duynn");
    const [password, setPassword] = useState("123456");
    const [hasLoginFailed, setHasLoginFailed] = useState(false);

    const navigate = useNavigate();
    const authContext = useAuth();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
        // console.log(event.target.value);
    }


    function checkLogin() {
        if (authContext.login(username, password)) {
            setHasLoginFailed(false);
            navigate(`/welcome/${username}`);
        } else {
            setHasLoginFailed(true);
        }
    }

    return <div className={"Login container"}>
        <h1 className="container">Todos Management Application</h1>
        {hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
        <div className="container d-flex justify-content-center align-items-center">
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" value={username}
                           onChange={handleUsernameChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <button type="button" className="btn btn-primary" onClick={checkLogin}>Submit</button>
                </div>
            </form>
        </div>
    </div>
}
export default LoginComponent