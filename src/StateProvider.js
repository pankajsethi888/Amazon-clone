import React, { createContext, useContext, useReducer } from "react";

// Prepares the DataLayer
export const StateContext = createContext();

// Wrap our App and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Pull information from the Data layer
export const useStateValue = () => useContext(StateContext);
