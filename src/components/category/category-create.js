import React, { Component }from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addCategory } from '../../redux/actions/categories-actions';  
import CategoryForm from '../form/category-form';
import 'react-widgets/dist/css/react-widgets.css'


class CategoryCreate extends Component {
    createCategory = (data) => {
      console.log(data);
      // TODO this is a hack, solve later by backend
      this.props.addCategory({...data, todos: []});
    }

    validate() {
      // TODO
    }

    render() {
      return (
        <div>
          <div className="title">
            <h1>
                Create Category
            </h1>
          </div>
      
          <CategoryForm submitHandler={this.createCategory} 
                        todos={this.props.todos}
                        type="create"/>
      
        </div>
    )}
}

const mapStateToProps = ({todos}) => ({
  todos
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCategory
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryCreate)

