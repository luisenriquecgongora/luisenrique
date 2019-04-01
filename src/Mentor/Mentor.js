import React, { Component } from 'react';
import './Mentor.css';
import {
  withRouter
} from 'react-router-dom';
import eventHandler from './EventHandler';
import anime from 'animejs';
var AWS = require('aws-sdk');

class Mentor extends Component {
  constructor(props){
    super(props);
    this.state = {
      clicked : false,
      listening: false,
      botName: "",
      listener: false
    }
    this.clickMentor = this.clickMentor.bind(this);
  }

  async clickMentor(e){
    let that = this;
    let botId = '#' + this.state.botName;

    e.preventDefault();
    if (!this.state.clicked){
      this.setState({clicked:true},
      ()=>{
        let config;
        let onClick = false;
        onClick = true;
        AWS.config.credentials = new AWS.Credentials('AKIAILETKFUHQOBQTSFQ','urkB19c2sm0VSCBzeDVLYOpTDzj+0jRxjnCHtXov', null);
        AWS.config.region = 'us-east-1';
        config = {lexConfig: { botName: this.state.botName }};
        let conversation = new window.LexAudio.conversation(config, function (state) {
            if (state === 'Listening') {
              anime({
                targets: document.querySelector(botId),
                rotate: '-45',
              });
              console.log(state);
            }
            if (state === 'Sending') {
              that.setState({listener: false})
                anime({
                  targets: document.querySelector(botId),
                  rotate: '0',
                });
                console.log(state);
            }
        }, function (data) {
            if(data.dialogState === "Fulfilled"){
              that.setState({clicked: false})
              eventHandler(data,that);
            }else if(data.dialogState === "Failed"){
              that.setState({clicked: false})
            }
        }, function (error) {
          if(error){
            that.setState({clicked: false, listener: false})
          }
        }, function (timeDomain, bufferLength) {
          let sum = 100*(timeDomain.reduce((partial_sum, a) => partial_sum + a)/timeDomain.length -127);
          that.setState({
            listener: true
          })
        });
        conversation.advanceConversation()
      })
    }
  }

  componentDidMount(){
    if(this.props.bot){
      this.setState({
        botName : this.props.bot.lexName
      })
    }
  }

  componentWillReceiveProps(props){
    if(props.bot){
      this.setState({
        botName : props.bot.lexName
      })
    }
  }

  render() {
    let type = this.props.bot.type;
    let mentorClass = 'mentor';
    let avatar = (type=="specialist") ? ("/boton_empathy.png"):("/boton_empathy.png");
    let listener = this.state.listener ? ('listener'):('non-listener')
    return (
      <a href="" onClick={this.clickMentor}><img id={this.state.botName} src={avatar} className={`${mentorClass} ${listener}`}/></a>
    );
  }
}

export default withRouter(Mentor);
