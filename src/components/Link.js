import React from "react";

import { Link } from "gatsby";

export default ({ children, style = {}, external, to, ...props }) => {
  const defaultStyle = {
    color: "#333",
    boxShadow: "none",
    textDecoration: "none",
    ...style
  };
  if (external) {
    return (
      <a href={to} style={defaultStyle}>
        {children}
      </a>
    );
  }
  return (
    <Link {...props} style={defaultStyle} to={to}>
      {children}
    </Link>
  );
};
