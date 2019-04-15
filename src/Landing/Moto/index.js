import React, { Component } from 'react';
import { connect } from "react-redux";
import anime from 'animejs';
import './index.css';
import { InView } from 'react-intersection-observer';


let text = {
  title:
    {
      en: `You Imagine. We Create.`,
      es: '¿Tienes en mente una página web?',
      pl: 'Czy potrzebujesz strony internetowej?'
    },
  description:
    {
      en: 'We make the imposible to make it real. We can: ',
      es: 'Tú imagine. Nosotros lo hacemos realidad. Convertimos lo imposible en realidad. Nosotros podemos: ',
      pl: 'Wyobrażasz sobie. Tworzymy. Sprawiamy, że niemożliwe staje się to realne. Możemy:'
    },
  benefitA:
    {
      en: 'Design a unique website or webapp.',
      es: 'Diseñar un sitio web o una aplicación web única',
      pl: 'Zaprojektuj unikalną stronę internetową lub aplikację internetową.'
    },
  benefitB:
    {
      en: 'Code and implement your website in the cloud',
      es: 'Programar e implementar el sitio web en la nube',
      pl: 'Koduj i implementuj swoją witrynę w chmurze'
    },
  benefitC:
    {
      en: 'Make Digital Marketing Campaigns',
      es: 'Crear campañas de Marketing Digital',
      pl: 'Twórz kampanie marketingu cyfrowego'
    }
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
    if(this.state.gifShown === false && inView === true){
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
      <div>
        <InView onChange={this.showGif}>
          <div className="abelFont container-moto">
              <div className="container-description-moto">
                <img alt="you-imagine-we-create" ref={this.imageWeb} src="/media/images/gif2.gif" className="img-moto"></img>
              </div>
              <div className="container-description-moto">
                <div ref={this.textWeb} className="text-moto">
                  <h2 className="left title-moto">{text.title[this.props.language]}</h2>
                  <p className="poiret-font">{text.description[this.props.language]}</p>
                    <ul className="poiret-font">
                      <li>{text.benefitA[this.props.language]}</li>
                      <li>{text.benefitB[this.props.language]}</li>
                      <li>{text.benefitC[this.props.language]}</li>
                    </ul>
                </div>
              </div>
          </div>
        </InView>
      </div>
    );
  }
}

const Moto = connect(mapStateToProps)(MotoConnected);
export default Moto;
