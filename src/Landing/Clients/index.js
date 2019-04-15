import React, { Component } from 'react';
import { connect } from "react-redux";
import './index.css';

let text = {
  clients_title: {en: 'Our Clients', es: 'Nuestros Clientes', pl: 'Nasi klienci'},
}

const mapStateToProps = (state) => {
  return { language: state.language };
};

class ClientsConnected extends Component {
  render() {
    return (
      <div className="clients-container">
        <h1 className="title-clients">{text.clients_title[this.props.language]}</h1>
        <div className="clients-list-container">
          <div className="client-container">
            <img alt="Moryc Studio" className="image-client" src="/media/images/moryc-logo.png" />
            <p>Moryc Studio</p>
          </div>
          <div className="client-container">
            <img alt="Geroospharma" className="image-client" src="/media/images/geroospharma_black.png" />
            <p>Geroos Pharma</p>
          </div>
        </div>
      </div>
    );
  }
}

const Clients = connect(mapStateToProps)(ClientsConnected);
export default Clients;
