import React, { Component } from 'react';

class FilterLocations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		};
	}

	render () {
		const { query } = this.state;
		
		return (
			<aside className="list-box">
				<form
					className="list-form"
					onSubmit={(event) => event.preventDefault()}
				>
					<button
						className="list-btn"
					>
						List
					</button>

					<input
						className="list-input"
						type="text"
						placeholder="Filter Locations..."
						value={query}
					/>
				</form>
			</aside>
		);
	}
}

export default FilterLocations;