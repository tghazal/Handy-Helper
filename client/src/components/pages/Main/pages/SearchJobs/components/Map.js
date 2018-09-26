import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {

  render() {
    console.log(this.props.center)
    return (
      <div>
        <GoogleMapExample center = {this.props.center}
          containerElement={<div style={{ height: `500px`, width: '100%' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
};
export default Map;

const GoogleMapExample = withGoogleMap(props => {
  console.log(props)
  return (<GoogleMap
    center={props.center}
    defaultZoom={13}
  >
  </GoogleMap>)
});