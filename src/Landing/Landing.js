import React, { Component } from 'react';
import Home from './Home/index';
import Moto from './Moto/index.js';
import TopBar from './TopBar/index';
import Clients from './Clients/index';
import Portfolio from './Portfolio/index';
import Footer from './Footer/Footer';
import { connect } from "react-redux";
import scrollToComponent from 'react-scroll-to-component';

const mapStateToProps = (state) => {
  return { institution: state.institution };
};

class LandingConnected extends Component {
  constructor(props){
    super(props);
    this.state={
      personalized: false
    }
    this.go2Home = this.go2Home.bind(this);
    this.go2Moto = this.go2Moto.bind(this);
    this.go2Contact = this.go2Contact.bind(this);
    this.go2Portfolio = this.go2Portfolio.bind(this);
  }

  go2Home(){
    scrollToComponent(this.home, { offset: 0, align: 'top', duration: 500, ease:'inCirc'});
  }

  go2Moto(){
    scrollToComponent(this.school, { offset: -100, align: 'top', duration: 500, ease:'inCirc'});
  }

  go2Contact(){
    scrollToComponent(this.contact, { offset: -100, align: 'top', duration: 500, ease:'inCirc'});
  }

  go2Portfolio(){
    scrollToComponent(this.portfolio, { offset: -100, align: 'top', duration: 500, ease:'inCirc'});
  }

  render() {
    return (
      <div>
        <TopBar go2Home={this.go2Home} go2Moto={this.go2Moto} go2Contact={this.go2Contact}  go2Portfolio={this.go2Portfolio} personalized={this.state.personalized}/>
          <div>
            <Home ref={(section) => { this.home = section; }}/>
            <Moto ref={(section) => { this.school = section; }}/>
            <Portfolio ref={(section) => { this.portfolio = section; }} />
            <Clients ref={(section) => { this.clients = section; }}/>
            <Footer ref={(section) => { this.contact = section; }}/>
          </div>
      </div>
    );
  }
}


const Landing = connect(mapStateToProps)(LandingConnected);
export default Landing;
