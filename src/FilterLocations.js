import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';

class FilterLocations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		};
	}

	updateQuery = (query) => {
		this.setState({
			query
		});
	}

	render () {
		const { query } = this.state;
		const { locationsList } = this.props;

		/* Filter the array of locations to display */
		let filteredLocations;
		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i');
			filteredLocations = locationsList.filter(location =>
				match.test(location.title)
			);
		} else {
			filteredLocations = locationsList;
		}

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
						onChange={(event) => 
							this.updateQuery(event.target.value)}
					/>
				</form>

				<ul className="locations-list">
					{
						filteredLocations.map(location => (
							<li
								className="location-item"
								key={location.key}
							>
								{location.title}
							</li>
						))
					}
				</ul>
			</aside>
		);
	}
}

export default FilterLocations;