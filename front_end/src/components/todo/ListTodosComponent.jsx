import React, {useEffect, useState} from "react";
import {deleteTodoApi, retrieveAllTodosForUsername} from "./api/TodoApiService";
import {useAuth} from "./security/AuthContext";
import {useNavigate} from "react-router-dom";

function ListTodosComponent() {
    // const today = new Date();
    // const targetDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

    // const todos = [
        // {id:1, description:'Learn aws', targetDate: targetDate, done:false},
        // {id:2, description:'Learn azure', targetDate: targetDate, done:false},
        // {id:3, description:'Learn gcc', targetDate: targetDate, done:false}
    // ];

    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState(null);
    const authContext = useAuth();
    const navigate = useNavigate();

    function refreshTodos() {
        retrieveAllTodosForUsername('duynn')
            .then(
                response => {
                    console.log(response.data);
                    setTodos(response.data);
                }
            )
            .catch(error => console.log(error));
    }

    //userEffect hook: tell React that your component needs to do something after render
    useEffect(() => {
        refreshTodos();
    }, []);

    function deleteTodo(id) {
        deleteTodoApi(authContext.username, id)
            .then(

                () => {
                    setMessage(`Delete of todo with id = ${id} successful`)
                    refreshTodos()
                }
                //1: Display message
                //2: Update Todos list
            )
            .catch(error => console.log(error))
    }
    function updateTodo(id) {
        navigate(`/todo/${id}`);
    }

    function addNewTodo() {
        navigate(`/todo/-1`)
    }


    return <div className={"ListTodos container"}>
        <h1>List Todos</h1>
        <div>
            {message && <div className={"alert alert-success"}>{message}</div>}
            <table className="table">
                <thead>
                <tr>
                    <th>id</th>
                    <th>description</th>
                    <th>targetDate</th>
                    <th>isCompleted</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
                </thead>
                <tbody>
                {/*<tr>*/}
                {/*    <td>{todos.id}</td>*/}
                {/*    <td>{todos.description}</td>*/}
                {/*</tr>*/}
                {
                    todos.map(
                        todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.targetDate.toString()}</td>
                                {/*<td>{todo.targetDate.toDateString()}</td>*/}
                                <td>{todo.done.toString()}</td>
                                <td>
                                    <button className="btn btn-warning"
                                            onClick={() => deleteTodo(todo.id)}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-success"
                                            onClick={() => updateTodo(todo.id)}>
                                       Update
                                    </button>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
            <div className="btn btn-success mb-3 align-content-center"
                 onClick={addNewTodo}>Add New Todo</div>
        </div>
    </div>
}
export default ListTodosComponent