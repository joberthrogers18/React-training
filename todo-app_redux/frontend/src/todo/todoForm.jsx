import React from 'react';
import Grid from '../template/grid';
import ButtonIcon from '../template/iconButton';
import { connect } from 'react-redux';

const TodoForm = props => {
    const keyHandler = e => {
        if(e.key == 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(e.key == 'Escape'){
            props.handleClear();
        }
    }

    return(
        <div role='form' className="todoForm row mb-2">
            <Grid cols='12 9 10' >
                <input id="description" className="form-control"
                onChange={props.handleChange}
                value={props.description}
                onKeyUp={keyHandler}
                placeholder="Adicione uma tarefa" type="text"/>
            </Grid>
            <Grid cols='12 3 2' >
                <ButtonIcon style="primary" icon="plus" onClick={props.handleAdd} ></ButtonIcon>
                <ButtonIcon style="info" icon="search" onClick={props.handleSearch} ></ButtonIcon>
                <ButtonIcon style="outline-dark" icon="close" onClick={props.handleClear} ></ButtonIcon>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        description: state.todo.description
    }
}

export default connect(mapStateToProps)(TodoForm);