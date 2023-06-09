import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import LoginComponent from "./LoginComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import ListTodosComponent from "./ListTodosComponent";
import LogoutComponent from "./LogoutComponent";
import FooterComponent from "./FooterComponent";
import AuthProvider from "./security/AuthContext";

function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path={"/"} element={<LoginComponent/>}/>\
                        <Route path={"*"} element={<ErrorComponent/>}/>
                        <Route path={"/login"} element={<LoginComponent/>}/>
                        <Route path={"/welcome/:username"} element={<WelcomeComponent/>}/>
                        <Route path={"/todos"} element={<ListTodosComponent/>}/>
                        <Route path={"/logout"} element={<LogoutComponent/>}/>
                    </Routes>
                    <FooterComponent/>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}












export default TodoApp;

