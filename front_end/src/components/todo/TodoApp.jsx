import React, {useState} from 'react';

function TodoApp(props) {
    return (
        <div className="TodoApp">
            <h1>Todo Management Application</h1>
            <LoginComponent/>
            {/*<WelcomeComponent/>*/}
        </div>
    );
}

function LoginComponent() {
    const [username, setUsername] = useState("duynn");
    const [password, setPassword] = useState("123456");

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    return <div className={"Login"}>
        <div className="container d-flex justify-content-center min-vh-100 align-items-center">
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
}

function WelcomeComponent() {
    return <div className={"Welcome"}>Welcome component</div>
}

export default TodoApp;

