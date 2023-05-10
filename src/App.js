import React from 'react';
import AppHeader from './components/header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';
import './sass/index.sass'
import ItemStatusFilter from './components/header/item-status-filter';

const App = () => {

	const todoData = [
		{ label: 'Drink Coffee', important: false, id: 1 },
		{ label: 'Make Awesome App', important: true, id: 2 },
		{ label: 'Have a lunch', important: false, id: 3 }
	];

	return (
		<div className="todo-app">
			<AppHeader toDo={1} done={3} />
			<div className="top-panel d-flex">
				<SearchPanel />
			<ItemStatusFilter />
			</div>
		<TodoList 
			todos={todoData} 
			onDeleted={ (id) => console.log('del', id ) } />
		</div>
	);
};

export default App;