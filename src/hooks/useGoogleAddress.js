import { useState, useEffect } from 'react';
import axios from 'axios';

import GOOGLE_URL_APIS from '../api/google';
import config from '../config/index';

export const useGoogleAddress = (address) => {
    const [map, setMap] = useState({});
    const GEOCODE_URL_API = `${GOOGLE_URL_APIS.maps_geocode}address=${address}&key=${config.googleMapsKey}`;

    useEffect( async () => {
        const response = await axios(GEOCODE_URL_API);
        setMap(response.data.results[0].geometry.location);
    }, [] );

    return map;
}