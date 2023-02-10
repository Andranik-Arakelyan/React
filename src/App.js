import './App.css';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TodoItem from './components/TodoItem';
import { v4 as uuidv4 } from 'uuid';




class App extends React.Component{
  state = {
    inputValue: "",
    listItems: [],
  }

  onAddClick = () => {
    if(this.state.inputValue) {
      this.setState({listItems: [...this.state.listItems, {data: this.state.inputValue, id: uuidv4()}], inputValue: ""})
    }
  }

  onInputChange = (e) => {
    this.setState({inputValue: e.target.value});
  }

  onRemoveClick = (id) => {
    this.setState({listItems: this.state.listItems.filter((item)=> item.id !== id)})
  }

  onEditClick = (id, editValue) => {
    this.setState({listItems: this.state.listItems.map((item)=> {
      if(item.id === id) {
        item.data = editValue;
      }
      return item;
    })});

  }

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <div className="typeBar">
          <TextField value={this.state.inputValue} 
                     onChange={this.onInputChange} 
                     id="standard-basic" label="Title..." variant="standard"/>
          <Button onClick={this.onAddClick} variant="outlined">Add</Button>
        </div>
        <ul>
          {this.state.listItems.map((obj) => 
            <TodoItem key={obj.id} id={obj.id} onRemoveClick={this.onRemoveClick} onEditClick={this.onEditClick} data={obj.data}/>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
