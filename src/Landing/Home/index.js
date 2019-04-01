import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import Typed from 'react-typed';
import ReactPlayer from 'react-player'
import './index.css';

let text = {
  moto: {en: 'Turning your Web Ideas into Reality', es: 'Transformamos tus Ideas en Realidad', pl: 'Zamieniamy Twoje Pomysły w Rzeczywistość'},
}

const mapStateToProps = (state) => {
  return { language: state.language };
};

class AboutConnected extends Component {
  constructor(props){
    super(props);
    this.state = {
    }

  }

  componentWillReceiveProps(){
    this.typed.reset();
  }

  render() {
    return (
      <div>
        <div className="background-home-back" />
        <div className="background-home-back-tran" />
        <div className="background-home">
          <div className="home-content-container">
            <div className="moto-container">
              <h1 className="moto-title">
                <Typed
                    typedRef={(typed) => { this.typed = typed; }}
                   strings={[text.moto[this.props.language]]}
                   typeSpeed={40}
               />
              </h1>
              <p className="code-font">Web Development · Frontend · Backend · Digital Catalogs · Online Stores · Chatbots</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const About = connect(mapStateToProps)(AboutConnected);
export default About;
