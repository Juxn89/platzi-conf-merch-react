import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import '../styles/components/Map.css';

export const LeafletMap = () => {
    const position = [51.505, -0.09];
    return (
        <>
            <MapContainer center={ position } zoom={ 13 } scrollWheelZoom={ false }>
                <TileLayer 
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                >                
                </TileLayer>
            </MapContainer>
        </>
    )
}
