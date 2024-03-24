/* importing normal svg doesn't work doing this for now */
import * as React from "react";
const Burger = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={20} {...props}>
    <path stroke="#000" d="M0 2h20M0 10h20M0 18h20" />
  </svg>
);

export { Burger };
