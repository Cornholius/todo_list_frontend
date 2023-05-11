import React, {Component} from 'react';


export default class ItemStatusFilter extends Component {

	buttons = [
		{name: 'all', label: 'Все'},
		{name: 'active', label: 'Активные'},
		{name: 'done', label: 'Готовы'}		
	]

	render() {

		const {btnFilter, onChangeActiveBtn} = this.props
		const buttons = this.buttons.map(({name, label}) => {
			
			const isActive = btnFilter === name
			const btnClass = isActive ? 'btn-filter-group': 'btn-outline-secondary'

			return (
				<button 
				key={name}
				type="button" 
				className={`btn ${btnClass}`}
				onClick={() => onChangeActiveBtn(name)}>{label}</button>
			);
		});
		return (
			<div className="btn-group">
				{buttons}
			</div>
		);
	};
}
