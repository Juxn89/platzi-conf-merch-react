import React, { useContext } from 'react';
import GoogleMaps from '../components/GoogleMaps';
import { LeafletMap } from '../components/LeafletMap';
import AppContext from '../context/AppContext';
import { useGoogleAddress } from '../hooks/useGoogleAddress';

import '../styles/components/Success.css';

export const Success = () => {
  const { State } = useContext(AppContext);
  const { buyer } = State;
  const location = useGoogleAddress(buyer[0].address);

  return (
    <div className='Success'>
      <div className="Success-content">
        <h2>{ `${ 'Juan' }, gracias por tu compra` }</h2>
        <span>Tu pedido llegara en 3 días a tu dirección:</span>
        <div className="Success-map">
          {/* <LeafletMap /> */}
          <GoogleMaps data={ location }/>
        </div>
      </div>
    </div>
  )
}
