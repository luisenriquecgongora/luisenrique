import React, { Component } from "react";
import { connect } from "react-redux";
import { changeLanguage } from "../redux-helper/actions/index";
import Language from './Language/index';
import './index.css';
import 'flag-icon-css/css/flag-icon.css';

function LanguageList(props){
  var languagesList = props.languages;
  const listLanguages = languagesList.map(function(language){
    if(props.currentLanguage !== language.name){
      return(
        <Language key={language.name} language={language} selectLanguage={props.selectLanguage} scrolled={props.scrolled}/>
      );
    }
  });
  return (
    <div>{listLanguages}</div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    changeLanguage: language => dispatch(changeLanguage(language))
  };
}

const mapStateToProps = (state) => {
  return { language: state.language };
};

class LanguageSelectorConnected extends Component {
  constructor() {
    super();
    this.state = {
      languages: [{name: 'pl', flag: 'pl'},{name: 'en', flag: 'gb'},{name: 'es', flag: 'es'}],
      language: "",
      showSelector: false,
    };
    this.selectLanguage = this.selectLanguage.bind(this);
    this.toggleLanguageSelector = this.toggleLanguageSelector.bind(this);
    this.hideSelector = this.hideSelector.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e){
    let position = window.scrollY;
    if(position>=10){
      this.setState({
        backgroundColor: 'transparent-back',
        textColor: 'purple-text'
      })
    }else{
      this.setState({
        backgroundColor: 'transparent-back',
        textColor: 'white-text'
      })
    }
  }

  hideSelector(){
    this.setState({
      showSelector: false
    })
  }

  toggleLanguageSelector(e){
    e.preventDefault();
    this.setState({
      showSelector: !this.state.showSelector
    })
  }

  selectLanguage(val) {
    let language = val;
    this.setState({ language: language });
    this.props.changeLanguage(language);
    this.hideSelector();
  }

  render() {
    let textColor = (this.props.scrolled ? ('black-text'):('white-text'))
    return (
      <div className='language-selector abelFont'>
        <a href="" onClick={this.toggleLanguageSelector} className={`language-title ${textColor}`}>{this.props.language.toUpperCase()}<i className="material-icons vertical-align">{this.state.showSelector ? ('arrow_drop_up'):('arrow_drop_down')}</i></a>
        {this.state.showSelector &&
          <div className="language-list">
            <LanguageList languages={this.state.languages} selectLanguage={this.selectLanguage} scrolled={this.props.scrolled} currentLanguage={this.props.language}/>
          </div>
        }
      </div>
    );
  }
}
const LanguageSelector = connect(mapStateToProps, mapDispatchToProps)(LanguageSelectorConnected);
export default LanguageSelector;
