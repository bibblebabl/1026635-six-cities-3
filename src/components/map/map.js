import React, {Component, createRef} from 'react';
import leaflet from 'leaflet';
import {PropTypes} from 'prop-types';

const CITY_COORDINATES = [52.38333, 4.9];

const ZOOM = 10;

const ICON = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

class Map extends Component {
  constructor(props) {
    super(props);

    this.map = createRef();
  }

  componentDidMount() {
    this.map = leaflet.map(`map`, {
      center: CITY_COORDINATES,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });

    this.map.setView(CITY_COORDINATES, ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this.addOffersIcons(this.props.offersCities);
  }

  addOffersIcons(offersCities) {
    offersCities.forEach(({location}) => {
      leaflet.marker([location.x, location.y], {ICON}).addTo(this.map);
    });
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}} ref={this.map}></div>
    );
  }
}

Map.propTypes = {
  offersCities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }).isRequired,
  }).isRequired).isRequired
};


export default Map;
