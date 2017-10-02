import React, {Componet } from "react";


class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.long
      }
    });
  }

  render() {
    return <div ref="map" />;//use this.refs.map will refer to the html element here.
  }
}

export default GoogleMap;
