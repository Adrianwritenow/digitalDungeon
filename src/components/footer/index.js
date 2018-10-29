import React, { Component } from 'react';
import '../../App.css';

class Footer extends Component {
  render() {

    return (
      <div className='footerContainer'>
        <img src='images/instaLogo.png' alt='instagram'/>
        <img src='images/twitterLogo.png' alt='twitter'/>
        <img src='images/soundCloud.png' alt='soundCloud'/>
        <img src='images/patreonLogo.png' alt='patreon'/>
      </div>


    );

  }

}
export default Footer;
