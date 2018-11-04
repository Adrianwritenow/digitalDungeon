import React, { Component } from 'react';
import '../../App.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import FlipCard from 'react-flipcard-2';



class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
    isFlipped:false
    };

    this.frontCard = React.createRef();


      this.showFront = this.showFront.bind(this);
      this.showBack = this.showBack.bind(this);
      this.handleOnFlip = this.handleOnFlip.bind(this);

  }



  showBack() {
    this.setState({
      isFlipped: true
    });
  }

  showFront() {
    this.setState({
      isFlipped: false
    });
  }

  handleOnFlip(flipped) {
   if (flipped) {
     this.frontCard.current.focus();
   }
 }


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
              <FlipCard
                        disabled={true}
                        flipped={this.state.isFlipped}
                        onFlip={this.handleOnFlip}
                        onKeyDown={this.handleKeyDown}
                      >
                <img src='images/gadTitle.png' className='profilePic animated infinite bounce delay-2s"' onClick={this.showBack}/>
                <div className='slideText' ref={this.frontCard} onClick={this.showFront}>
                  <h1>Gad</h1>
                  <p>Digital Dungeon is a Dungeons and Dragons 5th edition actual-play
                    podcast that attempts to entertain through high-fantasy hi-jinx in the
                    digital world of Aoll. Join us as we hit the squared circle with wrestling
                    extarodinare Holy Hezrou, hit the books with the ever-studious mage-in-training
                    Rudy Cobblehead, and hit the courtroom with Gad, Tortle Attorney-at-Law!
                  </p>
                </div>
              </FlipCard>
            </div>
          </ScrollAnimation>
        </div>
        </div>

      </div>


    );

  }

}
export default Characters;
