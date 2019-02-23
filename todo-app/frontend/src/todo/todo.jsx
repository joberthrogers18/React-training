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
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);

        this.refresh();
    }

    handleSearch(){
        this.refresh(this.state.description);
    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true})
            .then(resp => this.refresh(this.state.description));
    }

    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false})
            .then(resp => this.refresh(this.state.description));
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

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : '';

        axios.get(`${URL}?sort=-createdAt${search}`) //filter by createdAt date
            .then(res => this.setState({...this.state, description , list: res.data}))
            .catch(err => console.log(`Error in load todos: ${err}`));
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleClear(){
        this.refresh()
    }

    render(){
        return(
            <div>
               <PageHeader name="Tarefas" small="Cadastro" ></PageHeader>
               <TodoForm handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    description={this.state.description}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}/>
               <TodoList list={this.state.list}
                        handleRemove={this.handleRemove}
                        handleMarkAsDone={this.handleMarkAsDone}
                        handleMarkAsPending={this.handleMarkAsPending}/>
            </div>
        )
    }
} 