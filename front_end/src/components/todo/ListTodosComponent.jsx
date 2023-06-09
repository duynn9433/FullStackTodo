import React from "react";

function ListTodosComponent() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
    const todos = [
        {id:1, description:'Learn aws', targetDate: targetDate, done:false},
        {id:2, description:'Learn azure', targetDate: targetDate, done:false},
        {id:3, description:'Learn gcc', targetDate: targetDate, done:false}
    ];



    return <div className={"ListTodos container"}>
        <h1>List Todos</h1>
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>id</th>
                    <th>description</th>
                    <th>targetDate</th>
                    <th>isCompleted</th>
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
                                <td>{todo.targetDate.toDateString()}</td>
                                <td>{todo.done.toString()}</td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </div>
    </div>
}
export default ListTodosComponent