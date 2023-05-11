import React, { Component } from 'react';


export default class TodoListItem extends Component {
    

    checkBoxSwitch() {
        if (this.props.done) { return true }
        else { return false }
    };
	
    render() {
        const { label, onDeleted, 
                onToggleDone, onToggleImportant, 
                done, important } = this.props

        let listItem = 'todo-list-item-label'
        if (done) {
            listItem += ' done'
        }
        if (important) {
            listItem += ' important'
        }
        
        return (
            <span className="todo-list-item">
                <input 
                    className="form-check-input" 
                    type="checkbox" id="checkboxNoLabel" 
                    value="" 
                    aria-label="..."
                    onChange={ onToggleDone }
                    checked={this.checkBoxSwitch()} />

                <span className={listItem}>
                    {label}
                </span>
    
                <button 
                    type="button" 
                    className="btn btn-outline-info" 
                    onClick={ onToggleImportant }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-exclamation" viewBox="0 0 16 16">
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z"/>
                    </svg>
                </button>
    
                <button 
                    type="button" 
                    className="btn btn-outline-danger" 
                    onClick={onDeleted}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                    </svg>
                </button>
            </span>
        );
    };
}