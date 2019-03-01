import React, { Component }from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { editCategory } from '../../redux/actions/categories-actions';  
import CategoryForm from '../form/category-form';
import 'react-widgets/dist/css/react-widgets.css'


class CategoryEdit extends Component {
    editCategory = (data) => {
      const parsedData = {
        ...data,
        todos: data.todos.map(todo => todo.id)
      }
      this.props.editCategory(parsedData);
    }

    validate() {

    }

    render() {
      console.log(this.props);
       return (<div>
    
        <h1>
            Edit Category
        </h1>
    
        <CategoryForm submitHandler={this.editCategory}
                      todos={this.props.todos} 
                      type="edit" 
                      initData={this.props.category}/>
    
      </div>
    )}
}

const mapStateToProps = ({categories, todos}, props) => ({
  category: categories.find((category) => {
    return category.id === Number(props.match.params.id)
  }),
  todos
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      editCategory
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryEdit)

