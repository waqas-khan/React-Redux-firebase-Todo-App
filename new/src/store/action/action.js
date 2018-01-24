
import ActionTypes from '../constant/constant';


import firebase from 'firebase';
  var config = {
    apiKey: "AIzaSyBGjYTYniuVDafF-Y7JzEhlqS0sjwTC2Fc",
    authDomain: "reactapp-1.firebaseapp.com",
    databaseURL: "https://reactapp-1.firebaseio.com",
    projectId: "reactapp-1",
    storageBucket: "reactapp-1.appspot.com",
    messagingSenderId: "377679504336"
  };
  firebase.initializeApp(config);

var database = firebase.database();

export function addingTodoAction(todo) {
    return dispatch => {
        database.ref("/").child("todos").push(todo)
    }
}
export function renderingTodoAction(data) {
    return dispatch => {

        dispatch({ type: ActionTypes.GETTINGTODO, payload: data })


            

}
}

export function deleteAllAction() {
    return dispatch => {
        database.ref("/").child("todos").remove()
        let todos = []
        dispatch({ type: ActionTypes.DELETEALL, payload: todos})

    }
}
