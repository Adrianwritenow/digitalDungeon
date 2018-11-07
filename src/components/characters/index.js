import React, { Component } from 'react';
import '../../App.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Flippy, { FrontSide, BackSide } from 'react-flippy';





class Characters extends Component {



  render() {

    return (
      <div className='characterContainer'>
      <section>
        <div className='titleContainer notSplash'>
          <ScrollAnimation animateIn="zoomIn">
            <h1 className='notSplashMain'>CHARACTERS</h1>
          </ScrollAnimation>
          <ScrollAnimation delay={400} animateIn="rotateIn" duration={1}>
            <h4 className='notSplashSub'>LEARN ABOUT THE CHARACTERS OF AOLL</h4>
          </ScrollAnimation>
        </div>
      </section>
        <div className='container'>
          <div className='container2'>
          <ScrollAnimation animateIn="slideInRight">
            <div className='slide' id='HH'>
            <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
               /// these are optional style, it is not necessary
            >

            <FrontSide>
                <img src='images/hezrouTitle.png' ref={this.backCard} className='profilePic animated infinite bounce delay-2s"' onClick={this.showBack}/>
              </FrontSide>
              <BackSide style={{ backgroundColor: '#175852'}}>
                <div className='slideText' ref={this.frontCard} onClick={this.showFront}>
                  <h1>HOLY HEZROU</h1>
                  <p>Digital Dungeon is a Dungeons and Dragons 5th edition actual-play
                    podcast that attempts to entertain through high-fantasy hi-jinx in the
                    digital world of Aoll. Join us as we hit the squared circle with wrestling
                    extarodinare Holy Hezrou, hit the books with the ever-studious mage-in-training
                    Rudy Cobblehead, and hit the courtroom with Gad, Tortle Attorney-at-Law!
                  </p>
                </div>
                </BackSide>
              </Flippy>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={400} animateIn="fadeIn" duration={3}>
            <div className='slide' id='RC'>
            <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
               /// these are optional style, it is not necessary
            >

            <FrontSide>
                <img src='images/rudyTitle.png' ref={this.backCard} className='profilePic animated infinite bounce delay-2s"' onClick={this.showBack}/>
              </FrontSide>
              <BackSide style={{ backgroundColor: '#175852'}}>
                <div className='slideText' ref={this.frontCard} onClick={this.showFront}>
                  <h1>RUDY</h1>
                  <p>Digital Dungeon is a Dungeons and Dragons 5th edition actual-play
                    podcast that attempts to entertain through high-fantasy hi-jinx in the
                    digital world of Aoll. Join us as we hit the squared circle with wrestling
                    extarodinare Holy Hezrou, hit the books with the ever-studious mage-in-training
                    Rudy Cobblehead, and hit the courtroom with Gad, Tortle Attorney-at-Law!
                  </p>
                </div>
                </BackSide>
              </Flippy>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={400} animateIn="slideInLeft" duration={1}>


            <div className='slide cardFront' id='GG'>
            <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
               /// these are optional style, it is not necessary
            >

            <FrontSide>
                <img src='images/gadTitle.png' ref={this.backCard} className='profilePic animated infinite bounce delay-2s"' onClick={this.showBack}/>
              </FrontSide>
              <BackSide style={{ backgroundColor: '#175852'}}>
                <div className='slideText' ref={this.frontCard} onClick={this.showFront}>
                  <h1>Gad</h1>
                  <p>Digital Dungeon is a Dungeons and Dragons 5th edition actual-play
                    podcast that attempts to entertain through high-fantasy hi-jinx in the
                    digital world of Aoll. Join us as we hit the squared circle with wrestling
                    extarodinare Holy Hezrou, hit the books with the ever-studious mage-in-training
                    Rudy Cobblehead, and hit the courtroom with Gad, Tortle Attorney-at-Law!
                  </p>
                </div>
                </BackSide>
              </Flippy>
            </div>
          </ScrollAnimation>
        </div>
        </div>

      </div>


    );

  }

}
export default Characters;
