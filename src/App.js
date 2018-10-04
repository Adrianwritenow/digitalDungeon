import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
 <ul>
   <li> Zdzislaw </li>
   <li> Tweets </li>
   <li> About Daniel </li>
   <li> Other Amazing Artists</li>
 </ul>
</header>
<main>
 <article>
   <h1><img height="50px"src="https://addyosmani.com/fitc-wccdt/images/fire.gif"/>About Me<img height="50px"src="https://addyosmani.com/fitc-wccdt/images/fire.gif"/></h1>
   <img height="400px" src="https://github.com/Dkazem91/Portfolio-Page/blob/master/GithubImages/307726_10150299133111786_1683580760_n.jpg?raw=true"/>

   <p class="descriptions"> I am a 25 year finance graduate from Raleigh NC. I've got a degree in finance, and I've been looking for other things to do ever since. Raleigh NC is my hometown, go State!</p>
   <p class="descriptions"> I really enjoy playing guitar, writing nonsense, making electronic music, enjoying art with genuine appreciation and ironic sophistication. Currently I'm very much into vaporwave music, hence this lovably tacky webpage of mine inspired by what you would find on GeoCities.</p>
   <p class="descriptions"> I'm dead focused and serious on getting a career in coding. Learning on my own and then having to put it all on hold was hard. I was not living in a good environment and when things got worse I didn't really have a choice. Since then I have taken steps to keep the dream alive despite working again full time. Between work and 2 comp sci summer courses I am busy all day and night; I am stretching myself thin and still looking for other opportunities like Holberton. I know if my full attention was in learning to code, I would be there right now. I'm at the point financially and mentally where I will be more than ready to take the dive and hit the ground running after this summer is over. Thanks. </p>

 </article>
 <aside>
   <p> "placeholder to add comment thread later". </p>
 </aside>

</main>
      </div>
    );
  }
}

export default App;
