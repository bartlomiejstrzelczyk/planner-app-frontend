import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchCategories } from '../redux/actions/categories-actions';
import { fetchTodos } from '../redux/actions/todos-actions';
import { CategoryCreate, CategoryList, Category, CategoryEdit } from './category';
import { TodoList, TodoCreate, TodoEdit } from './todo';

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos();
    this.props.fetchCategories();
  }

  render() {
    return (
      <div>
        <header className="header">
          <div className="header__links">
            <Link to="/">All todos</Link>
            <Link to="/categories">Categories</Link>
          </div>
        </header>
    
        <main className="app-container">
          <Route exact path="/" component={TodoList} />
          <Route exact path="/categories" component={CategoryList} />
          <Route exact path="/categories/:id" component={Category} />
          <Route exact path="/categories/:id/edit" component={CategoryEdit} />
          <Route exact path="/todo/:id/edit" component={TodoEdit}/>
          <Route exact path="/todo/create" component={TodoCreate} />
          <Route exact path="/category/create" component={CategoryCreate} />
        </main>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCategories,
      fetchTodos,
    },
    dispatch
  )

const connectedComponent = connect(
  null,
  mapDispatchToProps
)(App);

export default withRouter(connectedComponent);
