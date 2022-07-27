import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { Home, Checkout, Information, Payment, Success, NotFound } from '../pages/index';

import AppContext from '../context/AppContext';
import { useInitialState } from '../hooks/useInitialState';

export const AppRouters = () => {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={ initialState }>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={ <Home/> }></Route>
                        <Route path='/checkout' element={ <Checkout/> }></Route>
                        <Route path='/checkout/information' element={ <Information/> }></Route>
                        <Route path='/checkout/payment' element={ <Payment/> }></Route>
                        <Route path='/checkout/success' element={ <Success/> }></Route>
                        <Route path='*' element={ <NotFound/> }></Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}