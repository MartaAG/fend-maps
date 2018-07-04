import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';

import * as dataLocations from './locations.json';

class FilterLocations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			filteredLocations: dataLocations,
			filteredMarkers: []
		};
	}

	updateQuery = (query) => {
		let controlledThis = this;
		this.setState({
			query
		});
		this.handleDisplayedLocations(query);
	}

	handleDisplayedLocations = (query) => {
		/* Manage the sync of locations */
		let filtLocations;
		let filtMarkers;

		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i');
			filtLocations = this.props.locationsList.filter(location =>
				match.test(location.title)
			);

			filtMarkers = this.props.markers.filter(marker =>
				match.test(marker.title)
			);

			this.setState({
				filteredLocations: filtLocations,
				filteredMarkers: filtMarkers
			});
		} else {
			this.setState({
				filteredLocations: this.props.locationsList,
				filteredMarkers: this.props.markers
			});
		}
	}

	render () {
		const { query, filteredLocations } = this.state;

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