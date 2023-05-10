import React, { Component } from 'react';


export default class TodoListItem extends Component {

    render() {
        const { label, onDeleted, 
                onToggleDone, onToggleImportant, 
                done, important } = this.props

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
                    onClick={ onToggleDone }>
                    {label}
                </span>
    
                <button 
                    type="button" 
                    className="btn btn-outline-success" 
                    onClick={ onToggleImportant }>
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