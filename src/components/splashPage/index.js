import React, { Component } from 'react';
import "animate.css/animate.min.css";
import AboutUs from '../aboutUs';
import ScrollAnimation from 'react-animate-on-scroll';




import '../../App.css';


class SplashPage extends Component {
  render() {



    return (
      <div className="splashContainer">
        <section>
        <div className='titleContainer'>

          <ScrollAnimation delay={400} animateIn="fadeInLeft">
            <img className='devilFireL' src='https://web.archive.org/web/20091026235054/http://de.geocities.com/duellderchatter/devilfire.gif'/>
          </ScrollAnimation>

          <ScrollAnimation animateIn="zoomIn">
            <div className='titleText'>
              <h1>DIGITAL</h1>
              <h3>DUNGEON</h3>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={400} animateIn="fadeInRight">
            <img  className='devilFireR' src='https://web.archive.org/web/20091026235054/http://de.geocities.com/duellderchatter/devilfire.gif'/>
          </ScrollAnimation>

        </div>
        </section>
        <section>
          <AboutUs />
        </section>
      </div>
    );
  }
}

export default SplashPage;
