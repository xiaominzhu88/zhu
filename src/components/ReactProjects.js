import React from 'react'
import todo from '../images/todo.png'
import countdown from '../images/countdown.png'
import randomColor from '../images/randomColor.png'
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
          <div className="card-table">
            <a
              href="https://videoplayer-zhu.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={videoPlayer} alt="video project" />
              <header>React video player</header>
            </a>
          </div>
        </div>

        <div className="card-table">
          <div className="card-table">
            <a
              href="https://meme-generator-zhu.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={meme} alt="countdown project" />
              <header>React meme-generator</header>
            </a>
          </div>
        </div>

        <div className="card-table">
          <a
            href="https://react-friends-co.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={friends} alt="todo project" />
            <header>React friends-app</header>
          </a>
        </div>

        <div className="card-table">
          <a
            href="https://react-random-color.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={randomColor} alt="todo project" />
            <header>React random-color-generator</header>
          </a>
        </div>

        <div className="card-table">
          <a
            href="https://react-todo-app-zhu.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={todo} alt="todo project" />
            <header>React todo-app</header>
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
              <header>React countdown-timer</header>
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
              <header>React markdown previewer</header>
            </a>
          </div>
        </div>
      </Slider>
    </div>
  )
}
