import React from "react";
import TripItem from "../TripItem/TripItem";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    padding: [10, 50],
    justifyContent: "center",
  },
});

const journeys = [
  {
    image: "bariloche.jpg",
    name: "Bariloche",
    description: "Viaja a Bariloche en aereo",
    price: "1500",
    button: "Promo",
  },
  {
    image: "buenosAires.jpg",
    name: "Buenos Aires",
    description: "Viaja a Buenos Aires este verano",
    price: "2000",
  },
  {
    image: "mendoza.jpg",
    name: "Mendoza",
    description: "Viaja a Mendoza con este maravilloso precio",
    price: "1200",
  },
];

export default function TripBuilder() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {journeys.map((journey) => (
        <TripItem
          key={journey.name}
          image={__dirname + "images/" + journey.image}
          name={journey.name}
          description={journey.description}
          price={journey.price}
        />
      ))}
    </div>
  );
}
