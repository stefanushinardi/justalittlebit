import React from "react";
import Link from "./Link";

import { rhythm, scale } from "../utils/typography";

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath || location.pathname === "/about") {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(0.5),
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: "none",
              textDecoration: "none",
              color: "inherit"
            }}
            to={"/"}
          >
            Just a little bit
          </Link>
        </h1>
      );
    } else {
      header = (
        <h2
          style={{
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: "none",
              textDecoration: "none"
            }}
            to={"/"}
          >
            Just a little bit
          </Link>
        </h2>
      );
    }

    const nav = (
      <h4 style={{ display: "flex" }}>
        <span>
          <Link to={"/"} style={{ marginRight: "1rem" }}>
            Home
          </Link>
          <Link to={"/about"}>About</Link>
        </span>
      </h4>
    );
    return (
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        {header}
        {nav}
        {children}
      </div>
    );
  }
}

export default Template;
