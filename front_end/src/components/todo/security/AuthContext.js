
import {createContext, useContext, useState} from "react";

//Create a Context
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);


//Put some state in the context
//Share the created context with other components
export default function AuthProvider({children}){

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function login(username, password){
        if (username === 'duynn' && password === '123456') {
            setIsAuthenticated(true);
            return true;
        } else {
            setIsAuthenticated(false);
            return false;
        }
    }

    function logout(){
        setIsAuthenticated(false);
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
