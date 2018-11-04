import React, { Component } from 'react';
import '../../App.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


class Characters extends Component {
  render() {

    return (
      <div className='characterContainer'>
      <section>
        <div className='titleContainer'>
          <h1>Characters</h1>
        </div>
      </section>
        <div className='container'>
          <div className='container2'>
          <ScrollAnimation delay={400} animateIn="rubberBand">
            <div className='slide' id='HH'>
              <div className='slideText'>
                <h1>Holy Hezrou</h1>
                <p>Digital Dungeon is a Dungeons and Dragons 5th edition actual-play
                  podcast that attempts to entertain through high-fantasy hi-jinx in the
                  digital world of Aoll. Join us as we hit the squared circle with wrestling
                  extarodinare Holy Hezrou, hit the books with the ever-studious mage-in-training
                  Rudy Cobblehead, and hit the courtroom with Gad, Tortle Attorney-at-Law!
                </p>
              </div>
                <img src='images/hezrouTitle.png' className='profilePic animated infinite bounce delay-2s"'/>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={400} animateIn="fadeIn" duration={3}>
            <div className='slide' id='RC'>
              <div className='slideText'>
                <h1>Rudy Cobblehead</h1>
                <p>Digital Dungeon is a Dungeons and Dragons 5th edition actual-play
                  podcast that attempts to entertain through high-fantasy hi-jinx in the
                  digital world of Aoll. Join us as we hit the squared circle with wrestling
                  extarodinare Holy Hezrou, hit the books with the ever-studious mage-in-training
                  Rudy Cobblehead, and hit the courtroom with Gad, Tortle Attorney-at-Law!
                </p>
              </div>
              <img src='images/rudyTitle.png' className='profilePic animated infinite bounce delay-2s"'/>

            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={400} animateIn="tada" duration={2}>
            <div className='slide' id='GG'>
              <div className='slideText'>
                <h1>Gad</h1>
                <p>Digital Dungeon is a Dungeons and Dragons 5th edition actual-play
                  podcast that attempts to entertain through high-fantasy hi-jinx in the
                  digital world of Aoll. Join us as we hit the squared circle with wrestling
                  extarodinare Holy Hezrou, hit the books with the ever-studious mage-in-training
                  Rudy Cobblehead, and hit the courtroom with Gad, Tortle Attorney-at-Law!
                </p>
              </div>
                <img src='images/gadTitle.png' className='profilePic animated infinite bounce delay-2s"'/>
            </div>
          </ScrollAnimation>
        </div>
        </div>

      </div>


    );

  }

}
export default Characters;
