import React, {Component} from 'react';


export default class SearchPanel extends Component {

	state = {
		searchFilter: ''
	};

    onLabelChange = (e) => {
		const searchFilter = e.target.value;
        this.setState({searchFilter})
		this.props.searchText(searchFilter)
    };

	render() {
		
		return (
			<input 
				type="text"
				className="form-control search-input"
				placeholder="что ищем?"
				value={this.state.searchFilter}
				onChange={this.onLabelChange} />
		);
	};
}