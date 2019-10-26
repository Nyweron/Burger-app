import React from "react";
import Aux from "../../higherOrderComponent/Auxiliary";

const layout = props => {
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main>{props.children}</main>
    </Aux>
  );
};

export default layout;
