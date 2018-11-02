import React, { Component } from 'react';
import '../../App.css';

class AboutUs extends Component {
  render() {

    return (
      <div className='aboutUsContainer'>
        <div className='aboutUsCard'>
        <div className="container">
          <div className="container-2">

            <div id="slide1" className="slide">
              <div className="title">
                <h1>"Fixed" background scrolling</h1>
              </div>
            </div>

            <h1>ABOUT US</h1>
            <p>Digital Dungeon is a Dungeons and Dragons 5th edition actual-play
              podcast that attempts to entertain through high-fantasy hi-jinx in the
              digital world of Aoll. Join us as we hit the squared circle with wrestling
              extarodinare Holy Hezrou, hit the books with the ever-studious mage-in-training
              Rudy Cobblehead, and hit the courtroom with Gad, Tortle Attorney-at-Law!
            </p>


            <div id="slide2" className="slide">

            </div>



          <div id="slide3" className="slide">

          </div>

          <div className="words">

          </div>

          <div id="slide4" className="slide">
            <div className="title">
              <h1>Now you know</h1>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>

    );

  }

}
export default AboutUs;
