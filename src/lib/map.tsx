import React, { useState, useEffect } from 'react';
import { Map as Maps, APIProvider as LoadGoogleMapScript, Marker } from '@vis.gl/react-google-maps';

const Map = ({ location }) => {
  const [coords, setCoords] = useState({ lat: 6.9271, lng: 79.8612 }); // Default to Colombo, Sri Lanka

  useEffect(() => {
    const geocodeLocation = async () => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=AIzaSyALeWJ7fL9Cu7DCm9mxmMJcIVGELjohwBc`
      );
      const data = await response.json();
      if (data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        setCoords({ lat, lng });
      }
    };

    geocodeLocation();
  }, [location]);

  return (
    <LoadGoogleMapScript apiKey="AIzaSyALeWJ7fL9Cu7DCm9mxmMJcIVGELjohwBc">
      <Maps
        style={{width: '60vw', height: '50vh',borderRadius:15}}
        center={coords}
        defaultZoom={3}
        disableDefaultUI={true}
        zoom={10}
      >
        <Marker position={coords} />
      </Maps>
    </LoadGoogleMapScript>
  );
};

export default Map;
