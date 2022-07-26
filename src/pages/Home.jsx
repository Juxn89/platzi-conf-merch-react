import React from 'react';
import { Products } from '../components/Products';
import initialState from '../data/initialState';
import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Platzi Conf Merch - Productos</title>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@TU_USER"/>
        <meta name="twitter:creator" content="@TU_USER"/>
        <meta name="twitter:title" content="Platzi Conf Store"/>
        <meta name="twitter:description" content="Platzi Conf Store"/>
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:title" content="Platzi Conf Store"/>
        <meta property="og:description" content="Platzi Conf Store"/>
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:url" content="platzistore.xyz" />
        <meta property="og:site_name" content="Platzi Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />

        <meta name="description" content="Descripcion de la pagina en la que esta el usuario" />
        <meta name="keywords" content="E-commerce,HTML, CSS, JavaScript, React" />
        <meta name="author" content="Su nombre" />
        
      </Helmet>
      <Products products={ initialState.products }/>
    </>
  )
}
