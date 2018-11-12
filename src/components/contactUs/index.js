import React, { Component } from 'react';
import '../../App.css';

class ContactUs extends Component {
  render() {

    return (
      <div className='contactUsContainer'>
        <form action="https://formspree.io/adrianwritenow@gmail.com" method="POST">
          <input type="text" name="name"/>
          <input type="email" name="_replyto"/>
          <input type="submit" value="Send"/>
          <input type='hidden' name='_next' value='/thankYou'/>
        </form>
      </div>


    );

  }

}
export default ContactUs;
