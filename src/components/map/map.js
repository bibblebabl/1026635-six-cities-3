import React, {PureComponent, createRef} from 'react';
import leaflet from 'leaflet';
import {number, arrayOf, shape, string} from 'prop-types';
import {getLocationArray} from '../../utils/index';

const ZOOM = 11;

const ICONS = {
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

    this.map = null;
    this.mapRef = createRef();

    this.icons = ICONS;

    this.pins = [];

    this.renderPins = this.renderPins.bind(this);
    this.renderMap = this.renderMap.bind(this);
  }

  componentDidMount() {
    const {currentOfferIdLocation} = this.props;

    this.renderMap(currentOfferIdLocation);
  }

  componentWillUnmount() {
    this.map.remove();
  }

  componentDidUpdate(prevProps) {
    if (this.props.hoveredOfferId !== prevProps.hoveredOfferId) {
      this.updateMap();
    }
  }

  updateMap() {
    const {currentOfferIdLocation, hoveredOfferId} = this.props;
    this.removePins();
    this.map.remove();
    this.renderMap(currentOfferIdLocation, hoveredOfferId);
  }

  renderMap(currentOfferIdLocation, hoveredOfferId) {
    const {offersLocations} = this.props;
    let cityCoordinates = getLocationArray(currentOfferIdLocation);

    if (hoveredOfferId) {
      const hovered = offersLocations.find((offer) => offer.id === hoveredOfferId);
      cityCoordinates = getLocationArray(hovered.location);
    }

    this.map = leaflet.map(this.mapRef.current, {
      center: cityCoordinates,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });

    this.map.setView(cityCoordinates, ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this.renderPins(this.props.offersLocations);
  }

  renderActivePin(currentOffer) {
    this.pins.push(leaflet.marker([currentOffer.x, currentOffer.y], {icon: this.icons.pinActive}).addTo(this.map));
  }

  renderPins(offersLocations) {
    offersLocations.forEach(({location}) => {
      this.pins.push(leaflet.marker([location.x, location.y], {icon: this.icons.pin}).addTo(this.map));
    });
  }

  removePins() {
    this.pins = [];
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
  }).isRequired).isRequired,
  currentOfferIdLocation: shape({
    x: number.isRequired,
    y: number.isRequired
  }),
  hoveredOfferId: number
};


export default Map;
