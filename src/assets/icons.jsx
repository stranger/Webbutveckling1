/* importing normal svg doesn't work doing this for now */
import * as React from "react";

const Burger = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={20} {...props}>
    <path stroke="#000" d="M0 2h20M0 10h20M0 18h20" />
  </svg>
);

const Lens = ({ ...props }) => (
  <div
    style={{
      opacity: "0.9",
      backgroundImage:
        "radial-gradient(circle at 75% 46%, #FFFFFF 0%, #D5FBFF 50%)",
      boxShadow: "0 2px 30px -20px rgba(0,0,0,0.50)",
      borderRadius: "50%",
    }}
    {...props}
  ></div>
);

export { Burger, Lens };
