import React, {Component} from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component{

    constructor(props){
        super(props);
        this.state = { description: '', list: []}

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this); // this is realy importante when we want use this im method ("this" belong now the class )
        this.handleRemove = this.handleRemove.bind(this);

        this.refresh();
    }

    handleAdd(){
        const description = this.state.description;

        axios.post(URL, {description})
            .then( resp => console.log(this.refresh()))
            .catch(err => console.log("Não funcionou: " + err));
    }

    handleChange(event){
        this.setState({...this.state, description: event.target.value})
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`) //filter by createdAt date
            .then(res => this.setState({...this.state, description: '', list: res.data}))
            .catch(err => console.log(`Error in load todos: ${err}`));
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }

    render(){
        return(
            <div>
               <PageHeader name="Tarefas" small="Cadastro" ></PageHeader>
               <TodoForm handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    description={this.state.description}/>
               <TodoList list={this.state.list}
                        handleRemove={this.handleRemove}/>
            </div>
        )
    }
} 