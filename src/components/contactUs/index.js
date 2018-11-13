import React, { Component } from 'react';
import '../../App.css';

class ContactUs extends Component {
  render() {

    return (
      <div className='contactUsContainer'>
        <img className='pillarL' src='https://web.archive.org/web/20091027080948/http://geocities.com/skidkid14/Pics/flamecolumn.gif'/>
          <form action="https://formspree.io/adrianwritenow@gmail.com" method="POST">
            <input placeholder='YOUR NAME'type="text" name="name"/>
            <input placeholder='YOUR EMAIL' type="email" name="_replyto"/>
            <textarea placeholder='WHAT??' type="text" name="_replyto"/>

            <button className='submitButton' type="submit">SEND</button>
            <input type='hidden' name='_next' value='/thankYou'/>
          </form>
          <img className='pillarR' src='https://web.archive.org/web/20091027080948/http://geocities.com/skidkid14/Pics/flamecolumn.gif'/>

      </div>


    );

  }

}
export default ContactUs;
