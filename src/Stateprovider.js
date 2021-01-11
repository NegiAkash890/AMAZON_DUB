import React, { createContext, useContext, useReducer } from "react";

//Prepare Data Layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull Information from the data Layer
export const useStateValue = () => useContext(StateContext);
