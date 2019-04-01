import React, { Component } from 'react';
import { connect } from "react-redux";
import './Footer.css';


let text = {
  name_dsc: {en: 'Digital Studio', es: 'Estudio digital', pl: 'Digital Studio'},
}

const mapStateToProps = (state) => {
  return { language: state.language };
};

class FooterConnected extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="footer-container white-text">
            <a href="https://www.facebook.com/oracliom/" target="_blank"><img src="/media/icons/fb_logo.png" className="logo-footer"></img></a>
            <a href="https://www.linkedin.com/in/luis-enrique-castillo-g%C3%B3ngora-web-developer-9044a411b/" target="_blank"><img src="/media/icons/ln_logo.png" className="logo-footer"></img></a>
            <a href="https://github.com/luisenriquecgongora"  target="_blank"><img src="/media/icons/github-icon.png" className="logo-footer"></img></a>
            <h1>Oracliom</h1>
            <h4>{text.name_dsc[this.props.language]}</h4>
            <a className="link-white poiret-font" href="mailto:luis.castillo@oracliom.com"><p> hello@oracliom.com</p></a>
            <a className="link-white poiret-font" href="tel:+48537435130"><p> +48 537 435 130</p></a>
            <p className="poiret-font"><i className="material-icons vertical-align">location_on</i> Ordona 20/2 - Katowice</p>
            <p className="poiret-font">© 2019 Copyright Oracliom</p>
          </div>
        </div>
      </div>
    );
  }
}

const Footer = connect(mapStateToProps)(FooterConnected);
export default Footer;
