import React from 'react';
import { Helmet } from 'react-helmet';
import { configSEO } from '../config/index';

export const SEO = ( { title, twitter_sumary, twitter_title, twitter_description, og_title, og_description, description, keywords } ) => {
    const {facebook, twitter, site} = configSEO;

    return (
        <>
            <Helmet>
                <title>{ title }</title>

                <meta name="twitter:card" content={ twitter_sumary }/>
                <meta name="twitter:site" content={`${twitter.user}`}/>
                <meta name="twitter:creator" content={`${twitter.user}`}/>
                <meta name="twitter:title" content={ twitter_title }/>
                <meta name="twitter:description" content={ twitter_description }/>
                <meta name="twitter:image" content={`${twitter.img}`} />

                <meta property="og:title" content={ og_title }/>
                <meta property="og:description" content={ og_description }/>
                <meta property="og:image" content={`${site.img}`}/>
                <meta property="og:url" content={`${site.url}`} />
                <meta property="og:site_name" content={`${site.site_name}`} />
                <meta property="og:locale" content={`${site.locale}`} />
                <meta property="og:type" content="article" />
                <meta property="fb:app_id" content={`${facebook.app_id}`} />

                <meta name="description" content={ description } />
                <meta name="keywords" content={ keywords } />
                <meta name="author" content={`${site.author}`} />
            </Helmet>
        </>
    )
}
