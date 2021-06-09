import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, chlidren }) => (<StateContext.Provider value={useReducer(reducer, initialState)}>
    {chlidren}
    </StateContext.Provider>);

export const useStateValue = ()=> useContext(StateContext); 