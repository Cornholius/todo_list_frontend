import React, { Component } from 'react';
import AppHeader from './components/header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';
import ItemAddForm from './components/item-add-form/item-add-form'
import ItemStatusFilter from './components/header/item-status-filter';
import './sass/index.sass'


let taskId = 0
export default class App extends Component {

	state = {
		todoData: [
			this.createTask('Drink Coffee'),
			this.createTask('Make Awesome App'),
			this.createTask('Have a lunch')
		]
	};

	//тестовая фигня. убрать
	createTask(label) {
		return {
			id: taskId++,
			label: label,
			important: false,
			done: false
		};
	};

	//переделать под реальное апи
	deleteItem = (id) => {
		this.setState(({todoData}) => {
			const idx = todoData.findIndex((el) => el.id === id)
			const before = todoData.slice(0, idx)
			const after = todoData.slice(idx + 1)
			return {todoData: [...before, ...after]}
		})
	};

	//переделать под реальное апи
	addItem = (text) => {
		this.setState(({todoData}) => {
			const newTask = {
				id: taskId++,
				label: text,
				important: false,
				done: false
			}
			return {todoData: [...todoData, newTask]}
		})
	};

	//меняем все свойства таски через эту функцию
	toggleProperty(array, id, propName) {
		const idx = array.findIndex((el) => el.id === id)
		const oldItem = array[idx]
		const newItem = {...oldItem, [propName]: !oldItem[propName]}
		const before = array.slice(0, idx)
		const after = array.slice(idx + 1)
		return [...before, newItem, ...after]
	};

	onToggleImportant = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			}
		});
	};
	
	onToggleDone = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			}
		});
	};
	
	render() {

		const {todoData} = this.state
		const doneCount = this.state.todoData.filter((i) => i.done).length
		const taskCount = this.state.todoData.length - doneCount

		return (
			<div className="todo-app">
				<AppHeader toDo={taskCount} done={doneCount} />
				<div>
					<ItemAddForm addTask={ this.addItem } />
				</div>

				<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter />
				</div>

			<TodoList 
				todos={todoData} 
				onDeleted={ this.deleteItem }
				onToggleDone={this.onToggleDone}
				onToggleImportant={this.onToggleImportant} />
			</div>
		);
	};
};