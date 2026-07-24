import React from 'react'
import {portfolioText} from '../../data/portfolio'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <section id='port'>
          <h2>포트폴리오</h2> 
          <div className="video__inner">
            {portfolioText.map( (video, key) => (
              <div className="video" key={key}>
                <div className="video__thumb play__icon" >
                  <Link to={`/video/${video.videoId}`}>
                    <img src={video.img} alt={video.title}></img>
                  </Link>
                </div>
              </div>
            ) )}
          </div>
        </section>
  )
}

export default Portfolio
