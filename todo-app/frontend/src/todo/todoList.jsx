import React from 'react';
import ButtonIcon from '../template/iconButton';

export default props => {

    const renderRows = () =>{
        const list = props.list || []

        return list.map((todo) => 
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <ButtonIcon style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(todo)}></ButtonIcon>
                </td>
            </tr>     
        )

    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}