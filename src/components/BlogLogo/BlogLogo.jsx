import React, { Component } from "react";
import Link from "gatsby-link";
import "./BlogLogo.css";

class BlogLogo extends Component {
  render() {
    const { logo, url, title } = this.props;
    if (logo) {
      return (
        <Link className="blog-logo" to={url || "/"}>
          Home
        </Link>
      );
    }
    return null;
  }
}

export default BlogLogo;
