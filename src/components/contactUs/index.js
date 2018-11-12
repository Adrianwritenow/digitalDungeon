import React, { Component } from 'react';
import '../../App.css';

class ContactUs extends Component {
  render() {

    return (
      <div className='contactUsContainer'>
        <form action="https://formspree.io/adrianwritenow@gmail.com" method="POST">
          <input placeholder='YOUR NAME'type="text" name="name"/>
          <input placeholder='YOUR EMAIL' type="email" name="_replyto"/>
          <textarea placeholder='WHAT??' type="text" name="_replyto"/>

          <button className='submitButton' type="submit">SEND</button>
          <input type='hidden' name='_next' value='/thankYou'/>
        </form>
      </div>


    );

  }

}
export default ContactUs;
