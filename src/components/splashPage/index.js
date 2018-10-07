import React, { Component } from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';




import '../../App.css';


class SplashPage extends Component {
  render() {



    return (
      <div className="splashContainer">
        <div className='titleContainer'>
          <ScrollAnimation animateIn="fadeInLeft">
            <img className='devilFireL' src='https://web.archive.org/web/20091026235054/http://de.geocities.com/duellderchatter/devilfire.gif'/>
          </ScrollAnimation>

          <ScrollAnimation animateIn="zoomIn">
            <div className='titleText'>
              <h1>DIGITAL</h1>
              <h3>DUNGEON</h3>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInRight">
            <img  className='devilFireR' src='https://web.archive.org/web/20091026235054/http://de.geocities.com/duellderchatter/devilfire.gif'/>
          </ScrollAnimation>

        </div>

      </div>
    );
  }
}

export default SplashPage;
