import React, {Component} from 'react';
import Grid from '../template/grid';
import ButtonIcon from '../template/iconButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeDescription, search, add, clear } from './todoActions';

class TodoForm extends Component{

    constructor(props){
        super(props);

        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.search();
    }

    keyHandler(e){
        const { add, clear, description, search } = this.props;

        if(e.key == 'Enter'){
            e.shiftKey ? search() : add(description)
        }else if(e.key == 'Escape'){
            clear();
        }
    }
    render(){
        const { add, clear, description, search } = this.props;

        return(
            <div role='form' className="todoForm row mb-2">
                <Grid cols='12 9 10' >
                    <input id="description" className="form-control"
                    onChange={this.props.changeDescription}
                    value={this.props.description}
                    onKeyUp={this.keyHandler}
                    placeholder="Adicione uma tarefa" type="text"/>
                </Grid>
                <Grid cols='12 3 2' >
                    <ButtonIcon style="primary" icon="plus" onClick={() => add(description)} ></ButtonIcon>
                    <ButtonIcon style="info" icon="search" onClick={search} ></ButtonIcon>
                    <ButtonIcon style="outline-dark" icon="close" onClick={clear} ></ButtonIcon>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })

const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, search, add, clear}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);