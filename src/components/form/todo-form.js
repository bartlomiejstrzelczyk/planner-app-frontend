import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form' 
import CustomMultiselect from './inputs/custom-multiselect';
import CustomCheckbox from './inputs/custom-checkbox';

class TodoForm extends Component {
    componentDidMount() {
        if (this.props.initData) {
            const todoCategories = this.props.initData.categories;
            if (todoCategories.length) {
                const categories = todoCategories.map((categoryId) => {
                    return this.props.categories.find(category => category.id === categoryId);
                })
                this.props.initialize({...this.props.initData, categories})
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
                        Title
                    </label>
    
                    <Field type="text" 
                        component="input"
                        name="title"
                        required
                    />
    
                </div>
    
    
                <div className="field">
                    <label>
                        Description
                    </label>
    
                    <Field name="description" component="textarea" />
                </div>
    
                <div className="inline fields">
                    <label>
                        Done
                    </label>

                    <Field name="done"
                        label="Done"
                        component={CustomCheckbox}
                        defaultValue={true}/>
                </div>
    
                <div className="field">
                    <label>
                        Categories
                    </label>
                
                    <Field name="categories" 
                        component={CustomMultiselect}
                        defaultValue={[]}
                        textField="name"
                        data={this.props.categories} /> 
                </div>
    
                <button type="submit" className="btn">
                    {this.props.type} todo
                </button>
    
            </form>
        )
    }
}


export default reduxForm({
    form: 'todoForm'
  })(TodoForm);