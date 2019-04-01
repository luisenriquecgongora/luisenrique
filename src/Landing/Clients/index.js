import React, { Component } from 'react';
import { connect } from "react-redux";
import './index.css';

let text = {
  name_dsc: {en: 'Digital Studio', es: 'Estudio digital', pl: 'Digital Studio'},
}

const mapStateToProps = (state) => {
  return { language: state.language };
};

class ClientsConnected extends Component {
  render() {
    return (
      <div className="clients-container">
        <h1 className="title-clients">Our clients</h1>
        <div className="image-client">
          <img src="/media/images/moryc.webp" />
          <p>Moryc Studio</p>
        </div>
      </div>
    );
  }
}

const Clients = connect(mapStateToProps)(ClientsConnected);
export default Clients;
