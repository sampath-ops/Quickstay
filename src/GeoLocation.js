/* eslint-disable */
import React, { Component } from "react";
import db from './firebase.config';
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
  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  const { latitude, longitude } = crd;
  const range = getGeohashRange(11.642755911349438, 78.16196434142107, 10); // NEED TO USE USER LATLNG

  db
    .collection("properties")
    .where("geohash", ">=", range.lower)
    .where("geohash", "<=", range.upper)
    .onSnapshot(snapshot => {
      snapshot.docs.map(doc=>{
        console.log(doc.data());
      })
    })
}

function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

export default class GeoLocation extends Component {
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success);
          } 
          else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } 
          else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  }

  render() {
    return (
      <>
      
      </>
    );
  }
}