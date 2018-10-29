import React, { Component } from 'react';
import '../../App.css';

class AboutUs extends Component {
  render() {

    return (
      <div className='aboutUsContainer'>
        <div className='aboutUsCard'>
        <div className="container">
          <div className="container-2">

            <div id="slide1" className="slide">
              <div className="title">
                <h1>"Fixed" background scrolling</h1>
              </div>
            </div>


            <div id="slide2" className="slide">
              <div className="title">
                <h1>Works on desktop</h1>
              </div>
            </div>

            <div className="words">
              But, the example does not work with mobile browsers (yet). With this, you have a few options:
              <ol>
                <li>Make the images scroll with the rest of the page on mobile, but keep the <code>fixed</code> images in desktop view</li>
                <li>Use only one image per page. Have one background per page and give it a <code>position: fixed</code>. Simple. Easy. Smooth. Works everywhere. <a href="https://jsfiddle.net/cruznunez/gkxr9r2s/48/">Example</a>. <a href="http://wherewedream.org/"
                    target="_blank">Live Example</a>.</li>
                <li>If you want many images on a single page, you can go down the parallax route, where the images move slightly when scrolling. <a href="https://codepen.io/keithclark/pen/JycFw" target="_blank">Example 1</a>. <a href="http://www.joincampaignzero.org/">Example 2</a></li>
                <li>If you absolutely want the fixed background images, try this CSS solution</li>
              </ol>
            </div>

          <div id="slide3" className="slide">
            <div className="title">
              <h1>Works on mobile</h1>
            </div>
          </div>

          <div className="words">
            This solution has many images on one page and all of them are <code>fixed</code>. It works on desktop and mobile. No JS needed. However, it is somewhat choppy with some devices. Also, a drawback I see is that you cannot enable the <code>-webkit-overflow-scrolling: touch</code>.
            It's basically momentum scrolling. It's nice and smooth on mobile web browsers. However, if you enable it with this solution, the fixed images stop working.
            <br/> Sucks huh.
            <br/> Maybe someone else will figure it out.
          </div>

          <div id="slide4" className="slide">
            <div className="title">
              <h1>Now you know</h1>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>

    );

  }

}
export default AboutUs;
