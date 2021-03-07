import React from 'react'
import todo from '../images/todo.png'
import countdown from '../images/countdown.png'
import covid from '../images/covid-screenshot.png'
import friends from '../images/friends.png'
import meme from '../images/meme.png'
import videoPlayer from '../images/videoplayer.png'
import markdown from '../images/markdown.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ReactProjects() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="projects">
      <Slider {...settings}>
        <div className="card-table">
          <a
            href="https://covid-19-view.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={covid} alt="todo project" />
            <header>React Covid-19 Tracking</header>
          </a>
        </div>
        <div className="card-table">
          <a
            href="https://videoplayer-zhu.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={videoPlayer} alt="video project" />
            <header>React Video player</header>
          </a>
        </div>
        <div className="card-table">
          <a
            href="https://meme-generator-zhu.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={meme} alt="countdown project" />
            <header>React meme generator</header>
          </a>
        </div>
        <div className="card-table">
          <a
            href="https://react-friends-co.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={friends} alt="todo project" />
            <header>React Friends</header>
          </a>
        </div>

        <div className="card-table">
          <a
            href="https://react-todo-app-zhu.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={todo} alt="todo project" />
            <header>React Basic Todo </header>
          </a>
        </div>
        <div className="card-table">
          <div className="card-table">
            <a
              href="https://count-down-react.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={countdown} alt="countdown project" />
              <header>React Countdown Timer</header>
            </a>
          </div>
        </div>

        <div className="card-table">
          <div className="card-table">
            <a
              href="https://markdown-react-zhu.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={markdown} alt="video project" />
              <header>React Markdown Previewer</header>
            </a>
          </div>
        </div>
      </Slider>
    </div>
  )
}
