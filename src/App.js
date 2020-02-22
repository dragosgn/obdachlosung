import React from 'react';
import mapboxgl from 'mapbox-gl';

import './App.css';
import SideBar from './Sidebar'

mapboxgl.accessToken = 'pk.eyJ1IjoiYm5lZGVsY3UiLCJhIjoiY2lrc2tqOTlxMDAwMncza2s5YnlvcHdmdiJ9.b29Ye0RJ3QfVaJCCfb7xVw';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lng: 13.405,
      lat: 52.52,
      zoom: 10
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/bnedelcu/ck6xo07ez135s1jqihjjq2viy',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
  }

  render() {
    return (
      <div className="App">
        <SideBar />
        <div id="page-wrap">
          <div className="content">
            <div ref={el => this.mapContainer = el} className="mapContainer" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
