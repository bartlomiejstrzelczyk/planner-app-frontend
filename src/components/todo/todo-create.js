import React, { Component }from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTodo } from '../../redux/actions/todos-actions';
import TodoForm from '../form/todo-form';
import 'react-widgets/dist/css/react-widgets.css'


class TodoCreate extends Component {
    addTodo = (data) => {
      const categories = data.categories ? data.categories : [];
      const parsedData = {
        ...data,
        categories: categories.map(category => category.id)
      }
      this.props.addTodo(parsedData);
    }

    validate() {

    }

    render() {
       return (<div>
        <div className="title">
          <h1>
              Create todo
          </h1>
        </div>
    
        <TodoForm categories={this.props.categories} type="create" submitHandler={this.addTodo}/>
    
      </div>
    )}
}

const mapStateToProps = ({ todos, categories }) => ({
  todo: todos[0],
  categories
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTodo
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoCreate)

