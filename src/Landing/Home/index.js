import React, { Component } from 'react';
import { connect } from "react-redux";
import Typed from 'react-typed';
import './index.css';

let text = {
  moto: {en: 'Turning your Web Ideas into Reality', es: 'Transformamos tus Ideas en Realidad', pl: 'Realizujemy Twoje pomysły internetowe'},
  services: {en: 'Web Development · Frontend · Backend · Digital Catalogs · Online Stores · Chatbots', es: 'Desarrollo Web · Frontend · Backend · Catálogos Digitales · Tiendas en Línea · Chatbots', pl: 'Tworzenie stron internetowych · Frontend · Backend · Katalogi cyfrowe · Sklepy internetowe · Chatboty'}
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
              <p>{text.services[this.props.language]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const About = connect(mapStateToProps)(AboutConnected);
export default About;
