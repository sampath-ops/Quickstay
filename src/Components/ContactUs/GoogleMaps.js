/* eslint-disable */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { useState } from 'react';

const SimpleMap = (props) => {
  const getMapOptions = (maps) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };

    const [center, setCenter] = useState({lat: 30.637535671590687, lng: 76.81357756676962 });
    const [zoom, setZoom] = useState(11);

    if(window.google){
      window.google = undefined;
    }

    return (
        <div style={{ height: '42vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC0iGHXPczH9Zla7iJUKC97ytWgawQMLDk", libraries: ['places'], id: '__googleMapsScriptId' }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={getMapOptions}
        >
          <Marker
            lat={30.637535671590687}
            lng={76.81357756676962}
            name="Quickstay"
            color="#960A0A"
          />
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;