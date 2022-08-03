import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import AppContext from '../context/AppContext';

import '../styles/components/Checkout.css';

export const Checkout = () => {
  const { State: { cart }, removeFromCart } = useContext(AppContext);
  const handleSumTotal = () => {
    return cart.reduce((a, b) => a + b.price, 0); 
  }

  const handleRemove = (product) => {
    removeFromCart(product);
  }

  return (
    <>
      <SEO 
        title = { 'Platzi Conf Merch | Checkout' }
        twitter_sumary = { 'twitter summary' }
        twitter_title = { 'tiwtter title' }
        twitter_description = { 'twitter description' }
        og_title = { 'Open Graph title' }
        og_description = { 'Open Graph description' }
        description = { 'Description page' }
        keywords = { 'E-commerce,HTML, CSS, JavaScript, React' }
      />

      <div className='Checkout'>
        <div className="Checkout-content">
          { cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin pedidos...</h3>}
          {
            cart.map(item => (
              <div className="Checkout-item" key={ `checkout-item-${item.id}` }>
                <div className="Checkout-element">
                  <h4>{ item.title }</h4>
                  <span>${ item.price }</span>            
                </div>
                <button type='button'>
                  <i className='fas fa-trash-alt' title='Eliminar' onClick={ () => handleRemove(item) }/>
                </button>
              </div>            
            ))
          }
        </div>
        
        { cart.length > 0 &&
            <div className='Checkout-sidebar'>
              <h3>Precio total: ${ handleSumTotal() }</h3>
              <Link to='/checkout/information'>
                <button type='button'>Continuar pedido</button>
              </Link>
            </div>
        }
      </div>    
    </>
  )
}
