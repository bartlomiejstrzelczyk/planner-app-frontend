import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteTodo } from '../../redux/actions/todos-actions'

function renderCategories(props) {
    return props.todo.categories.map((categoryId) => {
        const categoryObj = props.categories.find((category) => {
            return category.id === categoryId
        });
        return <Link key={categoryId} to={{
            pathname: '/categories/' + categoryId,
        }} className="pill">
            {categoryObj ? categoryObj.name : ''}
        </Link>
    })
}

class Todo extends Component {
    handleDelete = ()=> {
        this.props.deleteTodo(this.props.todo.id);
    }

    renderDoneClass() {
        let className = 'icon circle ';
        className += this.props.todo.done ? 'check' : 'outline';
        return className;
    }

    render() {
        return (
            <div className="item flex flex--column flex--align-stretch">
        
                <div className="item__title flex">
        
                    <i className={this.renderDoneClass()}></i>
        
                    {this.props.todo.title}
        
                </div>
        
                <div className="item__second-row">
                
                    <div className="item__description">
                        {this.props.todo.description}
                    </div>
        
                </div>
        
                <div className="flex flex--space-between">
                
                    <div className="item__categories flex flex--wrap">
                        {renderCategories(this.props)}
                    </div>
        
                    <div className="buttons-row">
                        <Link className="btn btn--edit" to={`/todo/${this.props.todo.id}/edit`}>
                            Edit
                        </Link>
        
                        <button className="btn btn--danger" onClick={this.handleDelete}>
                            Delete
                        </button>
                    </div>
        
                </div>
             
            </div>
        )
    }
}

const mapStateToProps = ({ categories }) => ({
	categories: categories
})

  
const mapDispatchToProps = dispatch =>
    bindActionCreators(
    {
        deleteTodo
    },
    dispatch
)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Todo)
