import React from 'react';

function InfoWindow(props) {
	const { currentMarker } = props;

	return (
		<aside className="info-window-box">
			{currentMarker.title}
		</aside>
	);
}

export default InfoWindow;