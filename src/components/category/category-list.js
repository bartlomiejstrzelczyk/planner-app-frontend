import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SearchList from '../search-list';
import { deleteCategory } from '../../redux/actions/categories-actions';

const searchBy = ['name'];

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateList = (filteredList) => {
    this.setState({
      categories: filteredList
    });
  }

  deleteCategory(id)  {
    this.props.deleteCategory(id);
  }

  renderList = () => {
    const list = this.state.categories ? this.state.categories : this.props.categories;

    return list.map((category) => {
        return (
          <div className="flex flex--space-between item" key={category.id}>

            <Link to={`/categories/${category.id}`}>
              {category.name}
            </Link>

            <div className="flex buttons-row">
              <Link to={`/categories/${category.id}/edit`} className="btn btn--edit">
                Edit
              </Link>

              <div className="btn btn--danger" onClick={() => this.deleteCategory(category.id)}>
                Delete
              </div>
            </div>

          </div>
        )
      })
  }

  render() {
    return (
      <div>
        <div className="title flex flex--space-between">
          <h1>Categories</h1>
          
          <Link to="/category/create">
            <button className="btn">
              Add category
            </button>
          </Link>
        </div>

        <SearchList list={this.props.categories} searchBy={searchBy} onSearch={this.updateList} />
    
        <div className="list">
          {this.renderList()}
        </div>
      </div>
    )
  }
} 

const mapStateToProps = ({ categories }) => ({
  categories: categories,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteCategory,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryList)
