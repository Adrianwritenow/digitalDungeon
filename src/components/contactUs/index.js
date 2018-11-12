import React, { Component } from 'react';
import '../../App.css';

class ContactUs extends Component {
  render() {

    return (
      <form action="https://formspree.io/adrianwritenow@gmail.com" method="POST">
        <input type="text" name="name">
        <input type="email" name="_replyto">
        <input type="submit" value="Send">
      </form>


    );

  }

}
export default ContactUs;
