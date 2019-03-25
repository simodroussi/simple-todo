import React, { Component } from 'react';
import TodoItems from './Components/TodoItems.js';
import './Style/TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      input: ''
    };
    this.addItem = this.addItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    if (this.state.input === '') {
      return;
    }
    let tempItemsArray = this.state.items;
    tempItemsArray.push({ id: Date.now(), item: this.state.input });
    this.setState({ items: tempItemsArray, input: '' });
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  deleteItem(id) {
    let filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter a task"
              onChange={this.handleInputChange}
              value={this.state.input}
            />
            <button type="submit">+ Add</button>
          </form>
        </div>
        <TodoItems deleteItem={this.deleteItem} items={this.state.items} />
      </div>
    );
  }
}

export default TodoList;
