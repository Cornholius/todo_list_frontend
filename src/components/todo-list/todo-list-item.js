import React, { Component } from 'react';


export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState((state) => {
            return {
                done: !state.done
            }
        })
    };

     onImportantClick = () => {
        this.setState((state) => {
            return {
                important: !state.important
            }
        })
    };

    render() {
        const { label, onDeleted } = this.props
        const {done, important} = this.state
        let listItem = 'todo-list-item'
        if (done) {
            listItem += ' done'
        }
        if (important) {
            listItem += ' important'
        }
        
        return (
            <span className={listItem}>
                <span 
                    className="todo-list-item-label"
                    onClick={ this.onLabelClick }>
                    {label}
                </span>
    
                <button 
                    type="button" 
                    className="btn btn-outline-success" 
                    onClick={ this.onImportantClick }>
                    <i className="fa fa-exclamation"/>
                </button>
    
                <button 
                    type="button" 
                    className="btn btn-outline-danger" 
                    onClick={onDeleted}>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    };
}