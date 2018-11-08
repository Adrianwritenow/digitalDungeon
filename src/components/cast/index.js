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
        <div className='castCard' id='JF'>
          <h1>Julio Felix, Dungeon Master</h1>
          <p>
            AKA Dungeon Daddy, AKA Zungeon Zaddy AKA Zon Zungeon Juan
            AKA El Gran Magnifico, AKA Mad Man J Mondo
            AKA El Papi Chulo que Come Culo
            When not daydreaming about fantasy worlds and their inhabitants,
            Julio can be found bouncing around and yelling loudly in the
            Noise-Rock band Witchbender.
          </p>
        </div>
        <div className='castCard' id='JF'>
          <h1>Joe Chisari AKA Urbvn</h1>
          <p>While not heard in the podcast, Joe&#39;s work is sprinkled
           throughout every episode. His music has been described as
           "Chill" and "Wavy", and we are thankful to have it grace our
           lil project. <a href='urbvnwave.bandcamp.com'>Check his music out!</a>

          </p>
        </div>
      </div>

    );

  }

}
export default Cast;
