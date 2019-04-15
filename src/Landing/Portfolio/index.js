import React, { Component } from 'react';
import { connect } from "react-redux";
import Masonry from 'react-masonry-css';
import './index.scss';


let text = {
  title:
    {
      en: `Portfolio`,
      es: 'Portafolio',
      pl: 'Portfolio'
    }
}

const mapStateToProps = (state) => {
  return { language: state.language };
};

class PortfolioConnected extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    const breakpointColumnsObj = {
      default: 4,
      1200: 4,
      768: 3,
      568: 2,
    };

    return (
      <div className="portfolio-container">
        <h1 className="portfolio-title">{text.title[this.props.language]}</h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          <div className="block-display">
            <div className="block-container">
              <a href="https://www.empathy.oracliom.com/" target="_blank" rel="noopener noreferrer"><img alt="Empathy" className="image-card" src="/media/images/empathy/video.gif" /></a>
              <div className="title-card">Empathy</div>
              <div className="description-card">CMS for Teachers, Students and Administrative Staff of Schools. Technologies: React, Redux,SASS, NodeJs, MongoDB, AWS S3, Cloudfront, Route53, Amazon Lex.</div>
            </div>
          </div>
          <div className="block-display">
            <div className="block-container">
              <a href="https://www.bosquo.pl/" target="_blank" rel="noopener noreferrer"><img alt="Bosquo.pl" className="image-card" src="/media/images/bosquo/video.gif" /></a>
              <div className="title-card">Bosquo</div>
              <div className="description-card">Landing Page created for Bosquo.pl - Luxury hotel beds. Technologies: React, Redux.</div>
            </div>
          </div>
          <div className="block-display">
            <div className="block-container">
              <a href="https://beerexplorer.oracliom.com/" target="_blank" rel="noopener noreferrer"><img alt="Beer Explorer" className="image-card" src="/media/images/beerexplorer/video.gif" /></a>
              <div className="title-card">Beer Explorer</div>
              <div className="description-card">Browser of different types of beer. Technologies: React</div>
            </div>
          </div>
          <div className="block-display">
            <div className="block-container">
              <a href="https://kidgame.oracliom.com/" target="_blank" rel="noopener noreferrer"><img alt="Kid Game" className="image-card" src="/media/images/kidgame/video.gif" /></a>
              <div className="title-card">Kid Game</div>
              <div className="description-card">Learn to write words in english easily. Technologies: PlainJS</div>
            </div>
          </div>
        </Masonry>
      </div>
    );
  }
}

const Portfolio = connect(mapStateToProps)(PortfolioConnected);
export default Portfolio;
