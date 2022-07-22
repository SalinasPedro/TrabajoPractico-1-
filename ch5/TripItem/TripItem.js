import React, { useContext } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import UserContext from "../User/User";
import { TripContext } from "../TripMaker/TripMaker";

const useStyles = createUseStyles({
  wrapper: {
    border: "lightgrey solid 2px",
    margin: 10,
    padding: 20,
    position: "relative",
    textAlign: "center",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
  },
  add: {
    border: "none",
    background: "none",
    cursor: "pointer",
  },
  image: {
    width: 300,
    height: 180,
  },
  price: {
    textAlign: "right",
  },
});

export default function TripItem({ image, name, description, price }) {
  const classes = useStyles();
  const { setTrip } = useContext(TripContext);

  return (
    <div className={classes.wrapper}>
      <button className={classes.add} onClick={() => setTrip(name)}>
        <img className={classes.image} src={image} alt={name} />
      </button>
      <h3>{name}</h3>
      <p className={classes.description}>{description}</p>
      <h2 className={classes.price}>${price}</h2>      
    </div>
  );
}

TripItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
