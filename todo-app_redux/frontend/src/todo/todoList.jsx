import React from 'react';
import { connect } from 'react-redux';
import ButtonIcon from '../template/iconButton';
import { bindActionCreators } from 'redux';

import { markAsDone, markAsPending, remove } from './todoActions';

const TodoList = props => {

    const renderRows = () =>{
        const list = props.list || []

        return list.map((todo) => 
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td className="mr-2">
                    <ButtonIcon  style='success' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(todo)}></ButtonIcon>
                    <ButtonIcon style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.markAsPending(todo)}></ButtonIcon>
                    <ButtonIcon style='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.remove(todo)}></ButtonIcon>
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

const mapDispatchToProps = dispatch => 
    bindActionCreators({markAsDone, markAsPending, remove}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);