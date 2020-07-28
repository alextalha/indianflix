import React from "react";

import "./buttonlink.css";

function ButtonLink(props) {
  // props => { className: "o que alguem passar" }
  console.log(props);
  return (
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  );
}

export default ButtonLink;
