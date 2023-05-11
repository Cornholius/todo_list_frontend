import React, { Component } from 'react';
import AppHeader from './components/header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';
import ItemAddForm from './components/item-add-form/item-add-form'
import ItemStatusFilter from './components/item-status-filter/item-status-filter';
import './sass/index.sass'


let taskId = 0
export default class App extends Component {

	state = {
		todoData: [
			this.createTask('встать'),
			this.createTask('Сделать кофе'),
			this.createTask('доделать сайт'),
			this.createTask('бежать в закат'),
		],
		searchFilter: '',
		btnFilter: 'all'
	};

	//тестовая фигня. убрать
	createTask(label) {
		return {
			id: taskId++,
			label: label.toLowerCase(),
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
	
	searchResult = (items, filter) => {
		console.log('items', items)
		console.log('filter', filter.length)
		if (filter.length > 0) {
			const result = items.filter((item) => {
				return item.label.toLowerCase().indexOf(filter.toLowerCase()) > -1;
			});
			return result
		}
		else {
			return items
		}
	};

	filter(items, filter) {
		switch(filter) {
			case 'all':
				return items;
			case 'active':
				return items.filter((item) => !item.done);
			case 'done':
				return items.filter((item) => item.done);
			default:
				return items;
		}
	}

	onChangeSearchPanel = (searchFilter) => {
		this.setState({searchFilter});
	};

	onChangeActiveBtn = (btnFilter) => {
		this.setState({btnFilter})
	};

	render() {

		const {todoData, searchFilter, btnFilter} = this.state
		const visibleItems = this.filter(this.searchResult(todoData, searchFilter), btnFilter)
		const doneCount = this.state.todoData.filter((i) => i.done).length
		const taskCount = this.state.todoData.length - doneCount

		return (
			<div className="todo-app">
				<AppHeader toDo={taskCount} done={doneCount} />
				<div>
					<ItemAddForm addTask={ this.addItem } />
				</div>

				<div className="top-panel d-flex">
					<SearchPanel searchText={this.onChangeSearchPanel}/>
					<ItemStatusFilter 
						btnFilter={btnFilter}
						onChangeActiveBtn={this.onChangeActiveBtn}/>
				</div>

			<TodoList 
				todos={visibleItems} 
				onDeleted={ this.deleteItem }
				onToggleDone={this.onToggleDone}
				onToggleImportant={this.onToggleImportant} />
			</div>
		);
	};
};