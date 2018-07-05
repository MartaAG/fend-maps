import React from 'react';

function InfoWindow(props) {
	const { currentMarker, infoContent } = props;

	return (
		<aside className="info-window-box">
			{currentMarker.title}
			<div>
				{infoContent}
			</div>
		</aside>
	);
}

export default InfoWindow;