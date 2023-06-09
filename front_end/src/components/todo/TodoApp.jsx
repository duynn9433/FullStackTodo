import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import LoginComponent from "./LoginComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import ListTodosComponent from "./ListTodosComponent";
import LogoutComponent from "./LogoutComponent";
import FooterComponent from "./FooterComponent";
import AuthProvider, {useAuth} from "./security/AuthContext";

function AuthenticatedRoute({children}) {
    const authContext = useAuth();
    if(authContext.isAuthenticated) {
        return children;
    }else{
        return <Navigate to={"/login"}/>;
    }
}

function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path={"/"} element={<LoginComponent/>}/>
                        <Route path={"*"} element={<ErrorComponent/>}/>
                        <Route path={"/login"} element={<LoginComponent/>}/>
                        <Route path={"/welcome/:username"} element={
                            <AuthenticatedRoute>
                                <WelcomeComponent/>
                            </AuthenticatedRoute>
                        }/>
                        <Route path={"/todos"} element={
                            <AuthenticatedRoute>
                                <ListTodosComponent/>
                            </AuthenticatedRoute>
                        }/>
                        <Route path={"/logout"} element={
                            <AuthenticatedRoute>
                                <LogoutComponent/>
                            </AuthenticatedRoute>
                        }/>
                    </Routes>
                    <FooterComponent/>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}












export default TodoApp;

