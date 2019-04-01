import React, { Component } from "react";
import './index.css';
import 'flag-icon-css/css/flag-icon.css';

class Language extends Component {
  constructor() {
    super();
    this.selectLanguage = this.selectLanguage.bind(this);
  }

  selectLanguage(e) {
    e.preventDefault();
    this.props.selectLanguage(this.props.language.name);
  }

  render() {
    let textColor = (this.props.scrolled ? ('black-text'):('white-text'))
    return (
      <div>
        <a href="" onClick={this.selectLanguage} className={`language-name ${textColor}`}>{this.props.language.name.toUpperCase()}</a>
      </div>
    );
  }
}

export default Language;
