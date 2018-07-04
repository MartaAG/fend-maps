import React, { Component } from 'react';

import * as dataLocations from './locations.json';
import FilterLocations from './FilterLocations';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: dataLocations,
      map: '',
      infoWindow: ''
    };
  }

  componentDidMount() {
    window.initMap = this.initMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyB_AnvKY1bA7EDGBQVxGF5EJMeu2MruYPM&callback=initMap');
  }

  initMap = () => {
    let controlledThis = this;
    const { locations } = this.state;

    let infoWindow = new window.google.maps.InfoWindow();

    /* Define the map */
    let map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: { lat: 60.1699, lng: 24.9384 }
    });

    /* Keep state in sync */
    this.setState({
      map,
      infoWindow
    });

    /* Create a marker for each location in the locations.json file */
    for (let i = 0; i < locations.length; i++) {
      /* Define the values of the properties */
      let position = locations[i].position;
      let title = locations[i].title;
      let id = locations[i].key

      /* Create the marker itself */
      let marker = new window.google.maps.Marker({
        map: map,
        position: position,
        title: title,
        animation: window.google.maps.Animation.DROP,
        id: id
      });

      /* Open infoWindow when click on the marker */
      marker.addListener('click', function () {
        controlledThis.displayInfoWindow(marker);
      });
    }
  }

  displayInfoWindow(marker) {
    const { map, infoWindow } = this.state;

    if (infoWindow.marker !== marker) {
      infoWindow.marker = marker;
      infoWindow.setContent(`<div>${marker.title}</div>`);
      infoWindow.open(map, marker);

      infoWindow.addListener('closeclick', function () {
        infoWindow.setMarker = null;
      });
    }
  }

  render() {
    return (
      <div className="App">
        <FilterLocations
          locationsList={this.state.locations}
        />
        <div id="map"></div>
      </div>
    );
  }
}

export default App;

function loadJS(src) {
  let ref = window.document.getElementsByTagName('script')[0];
  let script = window.document.createElement('script');

  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);

  script.onerror = function () {
    document.write('Load error: Google Maps')
  };
}
