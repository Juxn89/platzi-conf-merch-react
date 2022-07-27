import { useState } from 'react';
import InitialState from '../data/initialState';

export const useInitialState = () => {
    const [State, setState] = useState(InitialState);
    
    const addToCart = (payload) => {
        setState({
            ...State,
            cart: [...State.cart, payload]}
        );
    }

    const removeFromCart = (payload) => {
        setState({
            ...State,
            cart: State.cart.filter(item => item.id !== payload.id)
        });
    }

    return {
        addToCart,
        removeFromCart,
        State
    }
}
