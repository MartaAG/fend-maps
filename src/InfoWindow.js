import React from 'react';

function InfoWindow(props) {
	const { currentMarker, infoContent } = props;

	return (
		<aside className="info-window-box">
			<p className="attribution">Provided by Wikipedia</p>
			<h2>{currentMarker.title}</h2>
			<article>
				{infoContent}
			</article>
		</aside>
	);
}

export default InfoWindow;