import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/AppContext';

import '../styles/components/Header.css';

export const Header = () => {
  const { State: { cart } } = useContext(AppContext);

  return (
    <div className='Header'>
        <h1 className='Header-title'>
          <Link to='/'>
            PlatziConf Merch
          </Link>
        </h1>
        <div className="Header-checkout">
            <Link to='/checkout'>
              <i className='fas fa-shopping-basket' title='Checkout'/>
            </Link>
            {
              cart.length > 0 && <div className="Header-alert">{ cart.length }</div>
            }
        </div>
    </div>
  )
}
