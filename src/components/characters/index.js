import React, { Component } from 'react';
import '../../App.css';

class Characters extends Component {
  render() {

    return (
      <div className='characterContainer'>
      <section>
        <div className='titleContainer'>
          <h1>Characters</h1>
        </div>
      </section>

      <div className='characterCard'>
        <h1>Holy Hezrou</h1>
        <p>Digital Dungeon is a Dungeons and Dragons 5th edition actual-play
          podcast that attempts to entertain through high-fantasy hi-jinx in the
          digital world of Aoll. Join us as we hit the squared circle with wrestling
          extarodinare Holy Hezrou, hit the books with the ever-studious mage-in-training
          Rudy Cobblehead, and hit the courtroom with Gad, Tortle Attorney-at-Law!
        </p>
      </div>
      <div className='characterCard'>
        <h1>Rudy Cobblehead</h1>
        <p>Digital Dungeon is a Dungeons and Dragons 5th edition actual-play
          podcast that attempts to entertain through high-fantasy hi-jinx in the
          digital world of Aoll. Join us as we hit the squared circle with wrestling
          extarodinare Holy Hezrou, hit the books with the ever-studious mage-in-training
          Rudy Cobblehead, and hit the courtroom with Gad, Tortle Attorney-at-Law!
        </p>
      </div>
      <div className='characterCard'>
        <h1>Gad</h1>
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
export default Characters;
