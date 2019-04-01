import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { connect } from "react-redux";
import LanguageSelector from 'LanguageSelector/index';

let text = {
  home: {en: 'Home', es: 'Inicio', pl: 'Dom'},
  offer: {en: 'Offer', es: 'Oferta', pl: 'Oferta'},
  contact: {en: 'Contact', es: 'Contacto', pl: 'Kontakt'},

}

const mapStateToProps = (state) => {
  return { language: state.language };
};

class TopBarConnected extends Component {
  constructor(props){
    super(props)
    this.state={
      background: '',
      color: '',
      scrolled: false
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.go2Home = this.go2Home.bind(this);
    this.go2Moto = this.go2Moto.bind(this);
    this.go2Contact= this.go2Contact.bind(this);
  }

  go2Home(e){
    e.preventDefault();
    this.props.go2Home();
  }

  go2Moto(e){
    e.preventDefault();
    this.props.go2Moto();
  }

  go2Contact(e){
    e.preventDefault();
    this.props.go2Contact();
  }

  handleScroll(e){
    let position = window.scrollY;
    if(position>=1){
      this.setState({
        scrolled: true
      })
    }else{
      this.setState({
        scrolled: false
      })
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    let classNameTitleLogo = this.state.scrolled ? ('title-logo-landing-scrolled'):('title-logo-landing')
    let classNameNavbar = this.state.scrolled ? ('navbar-landing-scrolled'):('navbar-landing')
    let classNameLink = this.state.scrolled ? ('link-top-bar-scrolled'):('link-top-bar')
    let classNameButtonRegister = this.state.scrolled ? ('button-register-scrolled'):('button-register')
    let classNameButtonLogin = this.state.scrolled ? ('button-login-scrolled'):('button-login')
    return (
      <div>
        <nav className={classNameNavbar}>
          <a href="" onClick={this.go2Home} className={classNameTitleLogo + " link-empathy title-logo-center"}>Oracliom<span className="small-tm">™</span></a>
          <div className="navbar-landing-container">
              <a href="" className={classNameLink + ' link-empathy hide-on-med-and-down link-topbar'} onClick={this.go2Home}>{text.home[this.props.language].toUpperCase()}</a>
              <a href="" className={classNameLink + ' link-empathy hide-on-med-and-down link-topbar'} onClick={this.go2Moto}>{text.offer[this.props.language].toUpperCase()}</a>
              <a href="" className={classNameLink + ' link-empathy hide-on-med-and-down link-topbar'} onClick={this.go2Contact}>{text.contact[this.props.language].toUpperCase()}</a>
              <LanguageSelector scrolled={this.state.scrolled}/>
          </div>
        </nav>
      </div>
    );
  }
}

const TopBar = connect(mapStateToProps)(TopBarConnected);
export default TopBar;
