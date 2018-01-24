import React, { Component } from 'react';
// import { addingTodoAction } from '../store/action/action';
import { renderingTodoAction } from '../store/action/action';
// import { editingStateAction } from '../store/action/action';

import { connect } from 'react-redux';
import firebase from 'firebase';


class TodoList extends Component {
    deletingTodo(a,b){
        firebase.database().ref('/').child("todos/"+ a).remove()
        let todos = this.props.addedTodos;
        let afterDeleted = todos.slice(0,b).concat(todos.slice(b+1)) 
        this.props.rendering(afterDeleted)
    }
   editingHandler(id,key,todo){
    this.props.editingFunc(id,key,todo)
   }
    render(){
    console.log(this.props.editiing)
        // console.log(this.props.addedTodos)
        return(
                        
            <div>

                <div>
            <h1 className="text-center listHead">  TODO List</h1>
           <ul className="list-group">
       { this.props.addedTodos.map((todo,key)=>{
           return(
                <li className="list-group-item" key={key} id={todo.id}>{todo.todo}
                <button className="btn listbtn btn-primary" onClick={this.deletingTodo.bind(this,todo.id,key)}> Delete </button>
                <button className="btn listbtn btn-primary" onClick={this.editingHandler.bind(this,todo.id,key,todo.todo)} >Edit</button>
                </li>

           )
        })
    }
           </ul>
                </div>
            

           
            </div>
        )
    }
}

function mapStateToProp(state) {
    return ({
        addedTodos: state.root.todos,
        editingState: state.root.editingState

    })
}
function mapDispatchToProp(dispatch) {
    return ({
        rendering: (finaltodo)=>{dispatch(renderingTodoAction(finaltodo))},
    //    editing: ()=>{dispatch(editingStateAction())}
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(TodoList);