import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about-page">
        <section className="about-section">
          <h2>Present</h2>
          <p>Ryan is a Software Developer at <a href="https://www.thinkcompany.com">Think Company</a></p>
          <p>More Coming soon!</p>
        </section>
        <hr />
        <section className="about-section">
          <h2>Recent Past</h2>
          <section className="about-sub-section">
            <h3 className="about-employer">Nimblelight</h3>
            <h4 className="about-employed-date">Front End Developer, 2014 - 2016</h4>
            <p>Ryan previously worked with the wonderful folks at <a href="https://nimblelight.com">Nimblelight</a>, getting the opportunity to learn and grow rapidly while wearing many different hats (and petting so many dogs.)</p>
            <p>At Nimblelight, he was able cut his teeth on:</p>
            <ul>
              <li>Front end Development</li>

              <li>Dev-Ops (Grunt, Gulp, Continuous Integration)</li>
              <li>Pre-processors</li>
              <li>Database Design and Optimization</li>
              <li>Azure Cloud Migration</li>
              <li>.NET MVC</li>
            </ul>
          </section>
        </section>
        <hr />

      </div>
    );
  }
}

export default About;
