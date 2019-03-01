import React, { Component } from 'react'

class CustomCheckbox extends Component {
    renderClasses() {
        let classes = '';

        if (this.props.input.value) {
            classes += 'checkbox--checked ';
        } else if (this.props.disabled) {
            classes += 'checkbox--disabled';
        }

        return classes;
    }
    
    handleClick = (e) => {
        if (!this.props.disabled) {
            this.props.input.onChange(!this.props.input.value);
        }
    }

    render () {
        return <div className={ `checkbox ${this.renderClasses()}` } onClick={this.handleClick}></div>
    }
}

export default CustomCheckbox;