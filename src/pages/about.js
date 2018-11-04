import React from "react";
import Helmet from "react-helmet";

import Link from "../components/Link";
import Layout from "../components/layout";
import { rhythm } from "../utils/typography";

class About extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet htmlAttributes={{ lang: "en" }} />
        <h3
          style={{
            marginBottom: rhythm(0.8)
          }}
        >
          Hi, I am Theo!
        </h3>
        <p style={{ textAlign: "justify" }}>
          I am basically a full on geek. I graduated from UC Berkeley in 2016,
          then I spent the next 2 years working as an engineer at Splunk, before
          going back to my home country. Other than software, I love
          photography, design and coffee. Shoot me a tweet over here if you want
          to talk about those stuffs, or just say hi to me!
        </p>
        <div>
          <h4 style={{ color: "#333" }}>
            <Link external to="https://instagram.com/tibudiyanto">
              instagram
            </Link>{" "}
            //{" "}
            <Link external to="https://twitter.com/tibudiyanto">
              twitter
            </Link>{" "}
            //{" "}
            <Link external to="https://github.com/tibudiyanto">
              github
            </Link>{" "}
          </h4>
        </div>
      </Layout>
    );
  }
}

export default About;
