import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Todo } from '../todo'
import { deleteCategory } from '../../redux/actions/categories-actions';

class Category extends Component {
  handleDelete = () => {
    this.props.deleteCategory(this.props.category.id);
  }

  render() {
    return (
      <div>
        {/* TODO if category exists redirect to list of categories or 404 */}
        <div className="flex flex--space-between">
          <h1>
            {this.props.category.name}
          </h1>

          <div className="flex buttons-row">
            <Link className="btn btn--edit" to={`/categories/${this.props.category.id}/edit`}>
              Edit category
            </Link>

            <div className="btn btn--danger" onClick={this.handleDelete}>
              Delete Category
            </div>
          </div>
  
        </div>
        
        <div className="list">
          {
            this.props.todos.map((todo) => {
                return <Todo key="todo.id" todo={todo}/>
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ todos, categories }, ownProps) => ({
  category: categories.find((category) => {
      return category.id === parseInt(ownProps.match.params.id)
  }),
  todos: todos.filter((todo) => {
      return todo.categories.includes(parseInt(ownProps.match.params.id))
  }),
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
    {
        deleteCategory
    },
    dispatch
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Category)
