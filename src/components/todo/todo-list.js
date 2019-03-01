import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Todo from './todo'
import SearchList from '../search-list';

const searchBy = ['title', 'description']

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTodos = () => {
    const list = this.state.todos ? this.state.todos : this.props.todos;

    return list.map((todo) => {
      return <Todo key={todo.id} todo={todo}/>
    })
  }

  updateList = (filteredList) => {
    this.setState({
      todos: filteredList
    });
  }

  render() {
    return (
      <div>
        <div className="flex flex--space-between title">
          <h1> All todos</h1>

          <Link to="/todo/create">
            <button className="btn" onClick={this.props.showCreateTodo}>
              Add todo
            </button>
          </Link>
        </div>

        <SearchList list={this.props.todos} searchBy={searchBy} onSearch={this.updateList} />

        <div className="list">
          {this.renderTodos()}
        </div>
    </div>
  )}
}

const mapStateToProps = ({ todos }) => ({
  todos: todos
})

export default connect(
  mapStateToProps,
)(TodoList)
