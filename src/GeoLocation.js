/* eslint-disable */
import React, { Component } from "react";
import {db} from './firebase.config';
import geohash from "ngeohash";
// Calculate the upper and lower boundary geohashes for
// a given latitude, longitude, and distance in miles
const getGeohashRange = (
  latitude,
  longitude,
  distance, // miles
) => {
  const lat = 0.0144927536231884; // degrees latitude per mile
  const lon = 0.0181818181818182; // degrees longitude per mile

  const lowerLat = latitude - lat * distance;
  const lowerLon = longitude - lon * distance;

  const upperLat = latitude + lat * distance;
  const upperLon = longitude + lon * distance;

  const lower = geohash.encode(lowerLat, lowerLon);
  const upper = geohash.encode(upperLat, upperLon);

  return {
    lower,
    upper
  };
};

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;
  // console.log("Your current position is:");
  // console.log(`Latitude : ${crd.latitude}`);
  // console.log(`Longitude: ${crd.longitude}`);
  // console.log(`More or less ${crd.accuracy} meters.`);
  const { latitude, longitude } = crd;
  const range = getGeohashRange(25.622198992158612, 85.11519577716592, 7.45645); // NEED TO USE USER LATLNG
  // console.log(range.lower,range.upper);
  db
    .collection("properties")
    .where("geolocation", ">=", range.lower)
    .where("geolocation", "<=", range.upper)
    .onSnapshot(snapshot => {
      snapshot.docs.map(doc=>{
        // console.log(doc.data());
      })
    })
}

function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

export default class GeoLocation extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(success, errors, options);
  }

  render() {
    return (
      <>
      
      </>
    );
  }
}