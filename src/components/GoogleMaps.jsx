import React, { memo, useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import config from '../config';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const GoogleMaps = ({data}) => {
  console.log(config.googleMapsKey);
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: config.googleMapsKey
  });

  const center = {
    lat: data.lat,
    lng: data.lng
  };

  const onLoad = useCallback( (map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, [] );

  const onUnmount = useCallback( (map) => {
    setMap(null);
  }, [] );

  return isLoaded ? (
    <>
      <GoogleMap 
        mapContainerStyle={ containerStyle }
        center={ center }
        zoom={ 18 }
        onLoad={ onLoad }
        onUnmount={ onUnmount } >

      </GoogleMap>
    </>
  ) : <></>
};

export default memo(GoogleMaps);
