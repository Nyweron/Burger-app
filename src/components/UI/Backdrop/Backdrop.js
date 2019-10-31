import React from "react";
import classes from "./Backdrop.module.css";

const backdrop = props => {
  console.log("props", props);

  return props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;
};

export default backdrop;
