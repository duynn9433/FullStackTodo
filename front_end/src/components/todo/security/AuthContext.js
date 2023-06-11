import {createContext, useContext, useState} from "react";
import {executeJwtAuthenticationService} from "../api/AuthenticationApiService";
import {apiClient} from "../api/ApiClient";


//Create a Context
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);


//Put some state in the context
//Share the created context with other components
export default function AuthProvider({children}){

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [token, setToken] = useState('');

    async function login(username, password){
        // if (username === 'duynn' && password === '123456') {
        //     setUsername(username);
        //     setIsAuthenticated(true);
        //     return true;
        // } else {
        //     setUsername('');
        //     setIsAuthenticated(false);
        //     return false;
        // }
        try{
            const response = await executeJwtAuthenticationService(username, password);
            if(response.status === 200){
                const token = "Bearer " + response.data.token;
                setUsername(username);
                setIsAuthenticated(true);
                setToken(token);

                apiClient.interceptors.request.use(
                    config => {
                        config.headers.authorization = token;
                        return config;
                    }
                )

                return true;

            }else{
                logout();
                return false;
            }

        }catch (e){
            logout();
            console.log(e);
            return false;
        }
    }

    function logout(){
        setIsAuthenticated(false);
        setUsername('');
        setToken('');
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, login, logout, username, token}}>
            {children}
        </AuthContext.Provider>
    )
}
