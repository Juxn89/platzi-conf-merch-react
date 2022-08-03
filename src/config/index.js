const config = {
    paypalClientID: String(process.env.PAYPAL_CLIENT_ID),
    googleMapsKey: String(process.env.GOOGLE_MAPS_KEY)
}

export const configSEO = {
    site: {
        url: 'platzistore.xyz',
        site_name: 'Platzi Conf Store',
        locale: 'es_ES',
        author: 'Your Name',
        img: 'https://s3.amazonaws.com/gndx.dev/gndxdev.png'
    },
    facebook: {
        app_id: 'ID_APP_FACEBOOK'
    },
    twitter: {
        user: '@MY_USER',
        img: 'https://s3.amazonaws.com/gndx.dev/gndxdev.png'
    }
}

export default config;