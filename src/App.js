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
      this.setState({
        listItems: [...this.state.listItems, {data: this.state.inputValue, id: uuidv4(), status:false}],
        inputValue: ""
      });
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

  removeAllCompleted = () => {
    this.setState({listItems: this.state.listItems.filter((item)=> !item.status)})
  }

  

  render() {
    let completed = 0;
    return (
      <div className="App">
        <h1>To Do List</h1>
        <div className="typeBar">
          <TextField onKeyDown={(e) => {
                        if(e.key === "Enter") {
                          this.onAddClick()
                        }
                      }} 
                    value={this.state.inputValue} 
                    onChange={this.onInputChange} 
                    id="standard-basic" label="Title..." variant="standard"/>
          <Button onClick={this.onAddClick} variant="outlined">Add</Button>
        </div>
        <ul>
          {this.state.listItems.map((obj) => {
              if(obj.status){
                completed += 1;
              }
              return <TodoItem key={obj.id} 
              onKeyDownRemove={(e) => {
                if(e.key === "Enter") {
                  this.onRemoveClick(obj.id)
                }
              }}
              status={obj.status}
              onClickListItem={() => {
                obj.status = !obj.status;
                this.setState({listItems: this.state.listItems});
              }}
              onRemoveClick={() => this.onRemoveClick(obj.id)} 
              onEditClick={(value) => this.onEditClick(obj.id, value)} 
              data={obj.data}/>
          }
          )}
        </ul>
        <p>Completed {completed}/{this.state.listItems.length}
          <Button onClick={this.removeAllCompleted} variant="outlined">Remove all completed</Button>
        </p>
      </div>
    );
  }
}

export default App;
