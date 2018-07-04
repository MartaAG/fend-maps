import React, { Component } from 'react';

import * as dataLocations from './locations.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: dataLocations
    };
  }

  componentDidMount() {
    window.initMap = this.initMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyB_AnvKY1bA7EDGBQVxGF5EJMeu2MruYPM&callback=initMap');
  }

  initMap = () => {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: { lat: 60.1699, lng: 24.9384 }
    });

    let marker = new window.google.maps.Marker({
      position: { lat: 60.1699, lng: 24.9384 },
      map: map,
      title: 'Helsinki Cnter'
    });
  }

  render() {
    return (
      <div className="App">
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
