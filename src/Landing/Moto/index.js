import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import anime from 'animejs';
import './index.css';
import { InView } from 'react-intersection-observer';


let text = {
  title:
    {
      en: 'Do you have any Web Ideas?',
      es: '¿Eres profesor o capacitador?',
      pl: 'Czy jesteś nauczycielem lub trenerem?'
    },
  description:
    {
      en: 'You imagine. We create. We make the imposible to make it real. We can: ',
      es: 'Sabemos que preparar los curso, materiales y compartir toda la información con nuestros estudiantes puede ser una pesadilla y llegar a consumir mucho tiempo. Con nuestra ayuda es mucho más fácil.',
      pl: 'Wiemy, że przygotowanie kursu, materiałów i dzielenie się informacjami z uczniami może być koszmarem i czasochłonne. W Empathy jest to łatwe.'
    },
  benefitA:
    {
      en: 'Design a unique website or webapp.',
      es: '',
      pl: 'Utwórz zajęcia, kurs lub program.'
    },
  benefitB:
    {
      en: 'Code and implement your website in the cloud',
      es: 'Cargue materiales en archivos PDF, videos, imágenes, YouTube y Google Drive',
      pl: 'Przesyłaj materiały w plikach PDF, wideo, grafikach, YouTube i Google Drive Links'
    },
  benefitC:
    {
      en: 'Make Digital Marketing Campaigns',
      es: 'Invitar a personas al curso.',
      pl: 'Zaproś ludzi na kurs'
    },
  benefitD:
    {
      en: 'Accept Debid/Credit Card payments',
      es: 'Aceptar pagos con tarjeta de crédito / débito',
      pl: 'Akceptuj płatności debetowe / kartą kredytową'
    },
}

const mapStateToProps = (state) => {
  return { language: state.language };
};

class MotoConnected extends Component {
  constructor(props){
    super(props);
    this.state = {
      gifShown: false
    };
    this.imageWeb = React.createRef();
    this.textWeb = React.createRef();
    this.showGif = this.showGif.bind(this);
  }

  showGif(inView){
    if(this.state.gifShown == false && inView == true){
      this.setState({
        gifShown: true
      }, ()=>{
        anime({
          targets: this.imageWeb.current ,
          marginLeft: '0%',
          duration: 700,
          easing: 'easeInOutSine'
        })
        anime({
          targets: this.textWeb.current ,
          right: '0',
          duration: 700,
          easing: 'easeInOutSine'
        })
      })
    }

  }

  render() {
    return (
      <div className="">
        <div className="abelFont container-school">
          <InView onChange={this.showGif}>
            <div className="container-description-school hide-on-med-and-down">
              <div className='element-inside-school'>
                <img ref={this.imageWeb} src="/media/images/gif2.gif" className="img-school"></img>
              </div>
            </div>
            <div className="container-description-school">
              <div className='element-inside-school no-margin-top'>
                  <div ref={this.textWeb} className="text-school">
                    <h2 className="left title-school">{text.title[this.props.language]}</h2>
                    <img src="/media/images/gif2.gif" className="img-school hide-on-med-and-up"></img>
                    <p className="poiret-font">{text.description[this.props.language]}</p>
                      <ul className="montserrat-font">
                        <li>{text.benefitA[this.props.language]}</li>
                        <li>{text.benefitB[this.props.language]}</li>
                        <li>{text.benefitC[this.props.language]}</li>
                      </ul>
                  </div>
              </div>
            </div>
          </InView>
        </div>
      </div>
    );
  }
}

const Moto = connect(mapStateToProps)(MotoConnected);
export default Moto;
