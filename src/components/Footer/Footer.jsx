import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    const PoweredBy = props => {
      const { show } = props;
      if (show) {
        return (
          <section className="poweredby">
            Proudly published with <a href="https://gatsbyjs.org">Gatsby</a>
          </section>
        );
      }
      return null;
    };

    const { promoteGatsby } = this.props;
    const { label, url, year } = this.props.copyright;
    return (
      <footer className="site-footer clearfix">
        <div>
        <section className="reach-out">
            <p>Notice something off, or just want to reach out? Open an issue on <a href="https://github.com/RyKilleen/rykilleen.github.io/issues" target="_blank">GitHub</a> or reach out on <a href="https://twitter.com/deathbypapercut" target="_blank">Twitter</a>!</p>
          </section>
        </div>
        <div>
          <section className="copyright">
            <a href={url || "/"}>{label}</a> &copy;{" "}
            {year || new Date().getFullYear()}
          </section>
          
          <PoweredBy show={promoteGatsby} />
        </div>

      </footer>
    );
  }
}

export default Footer;
