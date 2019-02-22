import React, {Component} from 'react';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component{

    constructor(props){
        super(props);
        this.state = { description: '', list: []}

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this); // this is realy importante when we want use this im method ("this" belong now the class )
    }

    handleAdd(){
        console.log(this.state.description);
    }

    handleChange(event){
        this.setState({...this.state, description: event.target.value})
    }

    render(){
        return(
            <div>
               <PageHeader name="Tarefas" small="Cadastro" ></PageHeader>
               <TodoForm handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    description={this.state.description}/>
               <TodoList/>
            </div>
        )
    }
} 