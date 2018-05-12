import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about-page">
        <section className="about-section">
          <h2>Present</h2>
          <section className="about-position">
            <h3 className="position-employer">Think Company</h3>
            <h4 className="position-meta"><span className="position-meta-position">Software Developer</span>, <span className="position-meta-date">July 2016 - Present</span></h4>
        
            <p>Ryan is a Software Developer at <a href="https://www.thinkcompany.com">Think Company</a></p>
            <p>More Coming soon!</p>
          </section>
        </section>
        <hr />
        <section className="about-section">
          <h2>Recent Past</h2>
          <section className="about-position">
            <h3 className="position-employer">Nimblelight</h3>
            <h4 className="position-meta"><span className="position-meta-position">Front End Developer</span>, <span className="position-meta-date">Jan. 2014 - July 2016</span></h4>
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
