import React, { Component }from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { editTodo } from '../../redux/actions/todos-actions';
import TodoForm from '../form/todo-form';
import 'react-widgets/dist/css/react-widgets.css'


class TodoEdit extends Component {
    componentDidMount() {
      console.log(this.props);
        // TODO prepare data to show categories inside edit form
    }

    editTodo = (data) => {
      const parsedData = {
        ...data,
        categories: data.categories.map(category => category.id)
      }
      this.props.editTodo(parsedData);
    }

    render() {
       return (
       <div>

         <div className="title">
          <h1>
              Edit todo
          </h1>
         </div>
      
          <TodoForm categories={this.props.categories} 
                    initData={this.props.todo}
                    submitHandler={this.editTodo} 
                    type="edit"/>
    
      </div>
    )}
}

const mapStateToProps = ({ todos, categories }, props) => ({
  todo: todos.find((todo) => {
    return todo.id === Number(props.match.params.id);
  }),
  categories
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      editTodo
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoEdit)

