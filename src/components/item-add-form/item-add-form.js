import React, { Component } from 'react';


export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.label.length > 0) 
        {
            this.props.addTask(this.state.label);
            this.setState({ label: '' })
        }
    };

    render() {
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder='что добавить?'
                    value={this.state.label}
                    onChange={this.onLabelChange}
                    />
                <button className='btn btn-outline-secondary'>
                    Добавить
                </button>
            </form>
        );
    };
};