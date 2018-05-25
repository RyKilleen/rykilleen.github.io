import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about-page" id="content">
        <section className="about-section">
          <h1>A Little About Me</h1>
          <p>My name is Ryan Killeen, and I'm a developer with a focus in front-end development. I currently work at the excellent <a href="https://www.thinkcompany.com" target="_blank">Think Company</a>! I used to ask <em>Why</em> all the time, and it never stopped.</p> 
          <p>See my <a href="#work-history">work history below.</a></p>

          <h2>Too Much About Me</h2>
          <p>I know that effective developers understand a little bit about all the moving parts. I've modified server-side systems, implemented dev-ops processes, and debugged HTTP headers. I've migrated web apps into the cloud. I've optimized SQL queries, integrated third-party APIs, and leveraged CDNs for fast load times.</p>
          <p>I help businesses understand how to respect the user while building their solutions. I've worked with designers to understand business requirements. Then I built designs into pattern libraries for developers to use.</p>
          <p>I've written ActionScript and deleted ColdFusion, and I've made a lot of mistakes along the way. I want to help others learn what I know, and I'm eager to learn from anyone.</p>
          <h2>Spare Time</h2>
          <p>In my spare time, I like to dabble with photography (see some work over <a href="https://www.instagram.com/ishuttertoo/" target="_blank">@IShutterToo</a>)</p>
        </section>
        <hr />
        <section id="work-history" className="about-section">
          <h1>Work History</h1>
          <h2>Present</h2>
          <section className="about-position">
            <h3 className="position-employer">Think Company</h3>
            <h4 className="position-meta"><span className="position-meta-position">Software Developer</span>, <span className="position-meta-date">July 2016 - Present</span></h4>

            
            <p>I spend my days architecting and maintaining pattern libraries, and working with product teams to integrate those patterns into their products to build useful, efficient user experiences. I make systems easy for other developers use, to make executing designs fast and enjoyable.</p>
            <p>Though my focus is on the Front End Development, my job also requires me to define middle-tier requirements, implement server-side rendering, discuss and advocate for the user experience, help architect systems that affect the front end, and test.</p>
            <p>The Buzz Words:</p>
            <ul>
              <li>The Essentials: Semantic HTML, CSS, and JS</li>
              <li>React</li>
              <li>Jest</li>
              <li>Sass / LESS</li>
              <li>Webpack</li>
              <li>Node</li>
              <li>.NET MVC</li>
              <li>Neo4j</li>
              <li>Security</li>
              <li>Dev Ops</li>
              <li>CI/CD</li>
            </ul>
          </section>
        </section>
        <hr />
        <section className="about-section">
          <h2>Recent Past</h2>
          <section className="about-position">
            <h3 className="position-employer">Nimblelight</h3>
            <h4 className="position-meta"><span className="position-meta-position">Front End Developer</span>, <span className="position-meta-date">Jan. 2014 - July 2016</span></h4>
            <p>Ryan previously worked with the wonderful folks at <a href="https://nimblelight.com" target="_blank">Nimblelight</a>, getting the opportunity to learn and grow rapidly while wearing many different hats (and petting so many dogs.)</p>
            <p>At Nimblelight, he was able cut his teeth on:</p>
            <ul>
              <li>The Essentials: Semantic HTML, CSS, and JS</li>
              <li>Dev-Ops (Grunt, Gulp, Continuous Integration)</li>
              <li>Sass</li>
              <li>Knockout.JS</li>
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
