import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomMultiselect from './inputs/custom-multiselect';

class CategoryForm extends Component {
    componentDidMount() {
        if (this.props.initData) {
            const categoryTodos = this.props.initData.todos;
            if (categoryTodos) {
                const todos = categoryTodos.map((todoId) => {
                    return this.props.todos.find(todo => todo.id === todoId);
                })
                this.props.initialize({...this.props.initData, todos});
            } else {
                this.props.initialize(this.props.initData);
            }
        }
    }

    render() {
        return (
            <form className="form ui" onSubmit={this.props.handleSubmit(this.props.submitHandler)}>
                
                <div className="field">
                    <label htmlFor="title">
                        Name
                    </label>
    
                    <Field type="text" 
                        component="input"
                        name="name"
                        required
                    />
    
                </div>
    
                <div className="field">
                
                    <label>
                        Todos
                    </label>

                    <Field name="todos" 
                            component={CustomMultiselect}
                            defaultValue={[]}
                            textField="title"
                            data={this.props.todos} /> 
                </div>

                <button type="submit" className="btn">
                    {this.props.type} category
                </button>
    
            </form>
        )
    }
}


export default reduxForm({
    form: 'categoryForm'
  })(CategoryForm);