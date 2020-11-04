import React from 'react'
import ecommerce from '../images/ecommerce.png'
import findogs from '../images/findogs.png'
import movie from '../images/movie.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '/Users/mini/Desktop/zhu/my-site/src/assets/scss/nextJsProjects.scss'

export default function NextJsProjects() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  }
  return (
    <div className="projects">
      <Slider {...settings}>
        <div className="card-table">
          <a
            href="https://findogs.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={findogs} alt="findogs project" />
            <header>Findogs</header>
          </a>
        </div>

        <div className="card-table">
          <a
            href="https://next-js-ecommerces-store.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ecommerce} alt="ecommerce project" />
            <header>Ecommerce Store</header>
          </a>
        </div>

        <div className="card-table">
          <a
            href="https://movie-next.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={movie} alt="movie project" />
            <header>Movie Search</header>
          </a>
        </div>
      </Slider>
    </div>
  )
}
