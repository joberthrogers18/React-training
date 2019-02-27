import React from 'react';
import { connect } from 'react-redux';
import ButtonIcon from '../template/iconButton';

const TodoList = props => {

    const renderRows = () =>{
        const list = props.list || []

        return list.map((todo) => 
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td className="mr-2">
                    <ButtonIcon  style='success' icon='check' hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}></ButtonIcon>
                    <ButtonIcon style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)}></ButtonIcon>
                    <ButtonIcon style='danger' icon='trash-o' hide={!todo.done}
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

const mapStateToProps = state => {
    return {
        list: state.todo.list
    }
}

export default connect(mapStateToProps)(TodoList);