import React from "react";
import iconButton from "../template/iconButton";

export default props =>{

    const renderRows = ()=>{

        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done? "markedAsDone" : ""}>{todo.description}</td>
                <td>
                    <iconButton style="success" icon="check" onClick={()=> props.handleMarkAsDone(todo) } hide={todo.done}></iconButton>
                    <iconButton style="warning" icon="undo" onClick={()=> props.handleMarkAsPending(todo) } hide={!todo.done}></iconButton>
                    <iconButton style="danger" icon="trash-o" onClick={()=> props.handleRemove(todo)} hide={!todo.done}></iconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descriçao</th>
                    <th className="tableActions">Acões</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}