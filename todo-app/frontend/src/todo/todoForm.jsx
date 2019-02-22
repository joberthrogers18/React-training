import React from 'react';
import Grid from '../template/grid';
import ButtonIcon from '../template/iconButton';

export default props => (
    <div role='form' className="todoForm row">
        <Grid cols='12 9 10' >
            <input id="description" className="form-control"
            onChange={props.handleChange}
            value={props.description}
            placeholder="Adicione uma tarefa" type="text"/>
        </Grid>
        <Grid cols='12 3 2' >
            <ButtonIcon style="primary" icon="plus" onClick={props.handleAdd} ></ButtonIcon>
        </Grid>
    </div>
)