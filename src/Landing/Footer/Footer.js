import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="footer-container white-text">
            <a href="https://www.facebook.com/oracliom/" target="_blank"><img src="/media/icons/fb_logo.png" className="logo-footer"></img></a>
            <a href="https://www.linkedin.com/in/luis-enrique-castillo-g%C3%B3ngora-web-developer-9044a411b/" target="_blank"><img src="/media/icons/ln_logo.png" className="logo-footer"></img></a>
            <a href="https://github.com/luisenriquecgongora"  target="_blank"><img src="/media/icons/github-icon.png" className="logo-footer"></img></a>
            <h1>Oracliom</h1>
            <h4>Web Development & Chatbots</h4>
            <a className="link-white poiret-font" href="mailto:luis.castillo@oracliom.com"><p><i className="tiny material-icons vertical-align">email</i> hello@oracliom.com</p></a>
            <a className="link-white poiret-font" href="tel:+48537435130"><p><i className="tiny material-icons vertical-align">phone</i> +48 537 435 130</p></a>
            <p className="poiret-font"><i className="material-icons vertical-align">location_on</i> Ordona 20/2 - Katowice</p>
            <p className="poiret-font">© 2019 Copyright Oracliom</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
