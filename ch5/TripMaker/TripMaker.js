import React, { useReducer, createContext } from "react";
import TripBuilder from "../TripBuilder/TripBuilder";
import TripSummary from "../TripSummary/TripSummary";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    textAlign: "right",
  },
  cancel: {
    marginRight: "300px",
    borderRadius: "10px",
    fontSize: "20px",
    cursor: "pointer",
    padding: "15px",
    background: "none",
  },
  buttons: {
    borderRadius: "10px",
    fontSize: "20px",
    cursor: "pointer",
    padding: "15px",
    background: "none",
    position: "relative",
    alignItems: "center",
    margin: 10,
    display: "inline",
    left: 500,
  },
});

export const TripContext = createContext();

function reducer(state, item) {
  return [...state, item];
}


export default function TripMaker() {
  const classes = useStyles();
  const [trips, setTrip] = useReducer(reducer, []);
  return (
    <TripContext.Provider value={{ trips, setTrip }}>
      <h1 className={classes.wrapper}>
        <button
          className={classes.cancel}
          onClick={() => {
            trips.pop();
          }}
        >
          CANCELAR
        </button>
      </h1>
      <TripBuilder />
      <button className={classes.buttons} >PROMO</button>
      <button className={classes.buttons}>RESERVAR</button>
      <button className={classes.buttons}>COMPRAR</button>

      <TripSummary />
    </TripContext.Provider>
  );
}
