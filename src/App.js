import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import Todos from './components/Todos/Todos';
import Cockpit from './components/Cockpit/Cockpit';
import firebase from './firebase';

class App extends Component {
  state = {
    inputValue: '',
    tasks: [],
    buttonText: 'Přidat úkol',
    validation: '',
  };

  componentDidMount() {
    this.getStoredeData();
  }

  getStoredeData = () => {
    let test = firebase.database().ref('Tasks');
    test.on('value', (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      this.setState({ tasks: todoList });
    });
  };

  updateInputValue(event) {
    this.setState({
      inputValue: event.target.value,
      validation: '',
      buttonText: 'Přidat úkol',
    });
  }

  newTaskHandler = () => {
    let newitem = this.state.inputValue;
    if (newitem.length > 0) {
      let todoRef = firebase.database().ref('Tasks');
      let todo = {
        name: newitem,
      };
      todoRef.push(todo);
      this.setState({
        inputValue: '',
        buttonText: 'Přidáno',
      });
    } else {
      this.setState({
        validation: 'Moc krátký text',
      });
    }
  };

  onSave = (val, id) => {
    const todoRef = firebase.database().ref('Tasks').child(id);
    todoRef.update({
      name: val,
    });
  };

  removeFromList = (id) => {
    const todoRef = firebase.database().ref('Tasks').child(id);
    todoRef.remove();
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.newTaskHandler();
    }
  };

  render() {
    return (
      <div className="App">
        <Cockpit />
        <UserInput
          value={this.state.inputValue}
          onChange={(event) => this.updateInputValue(event)}
          onClick={this.newTaskHandler}
          buttonText={this.state.buttonText}
          validation={this.state.validation}
          onKeyDown={(event) => this.handleKeyDown(event)}
        />
        <Todos
          tasks={this.state.tasks}
          onSave={(event, index) => this.onSave(event, index)}
          deleted={this.removeFromList}
        />
      </div>
    );
  }
}

export default App;
