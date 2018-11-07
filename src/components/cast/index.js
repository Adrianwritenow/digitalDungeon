import React, { Component } from 'react';
import '../../App.css';

class Cast extends Component {
  render() {

    return (
      <div className='castContainer'>

      <section>

      <div className='titleContainer notSplash'>
        <h1>CAST & CREW</h1>
      </div>
      </section>
        <div className='castCard' id='MJ'>
          <h1>McCarty Johnson</h1>
          <p>Like a true wizard, McCarty manages to squeeze more hours in the
           day than actually exist. Well versed in the schools of culinary
           arts, music, video games, and frickin wicked dance moves,
           McCarty is a modern day polymath. Besides playing the wrestling
           Human Monk "The Holy Hezrou", McParty takes care of the editing,
           writes some music and provides the food.
           <a href='/characters#HH'><img src='images/hezrou.png' className='castImage'/></a>
          </p>
        </div>
        <div className='castCard' id='FK'>
          <h1>Flip Keene</h1>
          <p>By day, Flip teaches the youts how to play Stairway to Heaven.
           By night, the talented multi-instrumentalist rocks the stage with
           their punk quartet SugarPlum. Along with their beloved dog Gabbi,
            Flip is our social media maverick, tweeting some real hot takes
            and zingers such as "how do i make a tweet". Much like Rudolph
            Cobblehead, the nerdy Svirfneblin Warlock, Flip keeps their
            wits about them with some of our personal favorite lil quips.
          </p>
          <a href='/characters#RC'><img src='images/rudy.png' className='castImage'/></a>
        </div>
        <div className='castCard' id='AR'>
          <h1>Adrian Rodriguez</h1>
          <p>Ever handsome and debonair, Adrian is undoubtedly the most
          stylish of our bunch. Don&#39;t let his impeccable taste in
          fashion and well-coiffed hair fool you! Adrian is 100% certified
          N-E-R-D. When not making others as fashionable and stylish as
          himself, he puts his computer science degree to good use by designing
          websites and phone apps. Much like Gad, our plucky Tortle Rogue
          attorney, Adrian knows how to lighten the mood and entertain
          everyone around him.
          </p>
          <a href='/characters#GG'><img src='images/gad.png' className='castImage'/></a>
        </div>
        <div className='castCard'>
          <h1>CAST 1</h1>
          <p>Digital Dungeon is a Dungeons and Dragons 5th edition actual-play
            podcast that attempts to entertain through high-fantasy hi-jinx in the
            digital world of Aoll. Join us as we hit the squared circle with wrestling
            extarodinare Holy Hezrou, hit the books with the ever-studious mage-in-training
            Rudy Cobblehead, and hit the courtroom with Gad, Tortle Attorney-at-Law!
          </p>
        </div>
      </div>

    );

  }

}
export default Cast;
