import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import UserContext from "../User/User";

const useStyles = createUseStyles({
  wrapper: {
    borderBottom: "black solid 1px",
    padding: [15, 10],
    textAlign: "right",
  },
  logo: {
    textAlign: "left",
    fontSize: "50px",
  },
  welcomeUser: {
    textAlign: "right",
    fontSize: "40px",
  },
});

export default function Header() {
  const user = useContext(UserContext);
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.welcomeUser}>
        Bienvenido {user.name}, (
        {user.email})
      </div>
      <div className={classes.logo}>
        🧳Tripbnb
        </div>
    </div>
  );
}
