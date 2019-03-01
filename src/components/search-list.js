import React, { Component } from 'react';

export default class SearchList extends Component {
    search = (e) => {
        e.preventDefault();
        const query = e.target[0].value;
        const regex = new RegExp(query, 'i');
        const result = this.props.list.filter((item) => {
            let hasQuery = false;
            this.props.searchBy.forEach((key) => {
                if(regex.test(item[key])) {
                    hasQuery = true;
                }
            })
            return hasQuery;
        })

        this.props.onSearch(result);
    }

    render() {
        return (
            <form onSubmit={this.search} className="ui action input">
                <input type="text"
                    placeholder="Search"
                    name="query" />

                <button className="ui icon button">
                    <i className="search icon"></i>
                </button>
            </form>
    )}
}
