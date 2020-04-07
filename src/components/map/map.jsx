import React, {PureComponent, createRef} from 'react';
import leaflet from 'leaflet';
import {number, arrayOf, shape, string} from 'prop-types';
import {getLocationArray} from '../../utils/index';

const ZOOM = 11;

const PinIcons = {
  pin: leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 45]
  }),
  pinActive: leaflet.icon({
    iconUrl: `img/pin-active.svg`,
    iconSize: [30, 45]
  })
};

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.mapRef = createRef();
    this.mapComponent = null;
    this.pinsLayer = [];

    this.icons = PinIcons;

    this.renderMap = this.renderMap.bind(this);
    this.renderPins = this.renderPins.bind(this);
    this.updatePins = this.updatePins.bind(this);
    this.updateCityView = this.updateCityView.bind(this);
  }

  componentDidMount() {
    this.renderMap();
    this.renderPins();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedCity.name !== this.props.selectedCity.name) {
      this.updateCityView();
    }

    if (prevProps.hoveredOfferId !== this.props.hoveredOfferId) {
      this.updatePins(this.props.hoveredOfferId);
    }
  }

  componentWillUnmount() {
    this.mapComponent.remove();
  }

  renderMap() {
    const {selectedCity} = this.props;
    let cityCoordinates = getLocationArray(selectedCity.location);

    this.mapComponent = leaflet.map(this.mapRef.current, {
      center: cityCoordinates,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });

    this.mapComponent.setView(cityCoordinates, ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.mapComponent);
  }

  updatePins(activeOfferId) {
    for (let pin of this.pinsLayer) {
      this.mapComponent.removeLayer(pin);
    }
    this.pinsLayer = [];
    this.renderPins(activeOfferId);
  }


  renderPins(activeOfferId) {
    const {offersLocations} = this.props;
    const {pin, pinActive} = this.icons;

    offersLocations.forEach(({id, location}) => {
      const icon = activeOfferId && activeOfferId === id ? pinActive : pin;
      const pinElement = leaflet.marker([location.x, location.y], {icon}).addTo(this.mapComponent);
      this.pinsLayer.push(pinElement);
    });
  }

  updateCityView() {
    const {selectedCity} = this.props;
    const cityCoordinates = getLocationArray(selectedCity.location);
    this.mapComponent.setView(cityCoordinates, this.zoom);
  }


  render() {
    const {className} = this.props;
    return (
      <section id="map" className={`${className} map`} style={{height: `100%`}} ref={this.mapRef}></section>
    );
  }
}

Map.propTypes = {
  className: string,
  hoveredOfferId: number,
  selectedCity: shape({
    name: string.isRequired,
    location: shape({
      x: number.isRequired,
      y: number.isRequired,
    }).isRequired,
  }),
  offersLocations: arrayOf(shape({
    "id": number.isRequired,
    "city": shape({
      name: string.isRequired,
      location: shape({
        x: number.isRequired,
        y: number.isRequired,
      }).isRequired,
    }).isRequired,
    "location": shape({
      x: number.isRequired,
      y: number.isRequired
    }).isRequired,
  }).isRequired).isRequired
};


export default Map;
