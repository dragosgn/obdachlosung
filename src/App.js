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
      zoom: 10,
      counter: 799999
    };
  }

  initMap() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/bnedelcu/ck6xo07ez135s1jqihjjq2viy',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
  }

  initSocket() {
    console.log('Initializing Socket connection')
    var socket = window.io("https://shielded-cliffs-05755.herokuapp.com/");
    socket.on("message", data => {
      console.log('message from socket', data);
      this.handleSocketMessage(data);
    });
  }

  handleSocketMessage({body}) {
    this.setState({
      lat: body.lat || this.state.lat,
      lng: body.long || this.state.lng,
      zoom: 16,
      message: this.state.message + '\n' + body.message 
    });
  }

  componentDidMount() {
    this.initMap();
    this.initSocket();
  }

  componentDidUpdate() {
      const marker = new mapboxgl.Marker()
      .setLngLat([this.state.lng, this.state.lat])
      .addTo(this.map);

      this.map.easeTo({
        center: [this.state.lng, this.state.lat],
        zoom: 12
      })
    
    
  }

  render() {
    console.log(this.state.lat, this.state.lng)
    return (
      <div className="App">
        <SideBar />
        <div id="page-wrap">
          <div className="content">
            <div ref={el => this.mapContainer = el} className="mapContainer" />
          </div>
        </div>
        <div className="footer">
          <div className="poweredby">
            <ul>
              <li className="alignmeup">
                Powered By:
              </li>
              <li>
                <a href="https://www.twilio.com/" target="_blank"><div><img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/38586/preview.svg" alt="Twilio"/></div></a>
              </li>
              <li>
                <a href="https://lisk.io/" target="_blank"><div><img src="http://crypto.marketswiki.com/images/e/e1/Lisk_logo.png" alt="Lisk"/></div></a>
              </li>
              <li>
                <a href="https://www.mapbox.com/" target="_blank"><div><img src="https://seeklogo.com/images/M/mapbox-logo-D6FDDD219C-seeklogo.com.png" alt="MapBox"/></div></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="counter">
          Counter: {this.state.counter}
        </div>
      </div>
    );
  }
}

export default App;
