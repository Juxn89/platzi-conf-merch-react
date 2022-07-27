import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Checkout } from '../pages/Checkout';
import { Information } from '../pages/Information';
import { Payment } from '../pages/Payment';
import { Success } from '../pages/Success';
import { NotFound } from '../pages/NotFound';

export const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> }></Route>
                <Route path='/checkout' element={ <Checkout/> }></Route>
                <Route path='/checkout/information' element={ <Information/> }></Route>
                <Route path='/checkout/payment' element={ <Payment/> }></Route>
                <Route path='/checkout/success' element={ <Success/> }></Route>
                <Route path='*' element={ <NotFound/> }></Route>
            </Routes>
        </BrowserRouter>
    );
}