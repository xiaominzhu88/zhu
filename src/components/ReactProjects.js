import React from 'react'
import todo from '../images/todo.png'
import countdown from '../images/countdown.png'
import randomColor from '../images/randomColor.png'
import friends from '../images/friends.png'
import weather from '../images/weather.png'
import meme from '../images/meme.png'
import videoPlayer from '../images/videoplayer.png'
import markdown from '../images/markdown.png'

export default function ReactProjects() {
  return (
    <div className="projects">
      <div className="card-table">
        <h5>React weather-app</h5>
        <a
          href="https://zhu-weather-react.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={weather} alt="todo project" />
        </a>
      </div>

      <div className="card-table">
        <h5>React friends-app</h5>
        <a
          href="https://react-friends-co.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={friends} alt="todo project" />
        </a>
      </div>

      <div className="card-table">
        <h5>React random-color-generator</h5>
        <a
          href="https://react-random-color.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={randomColor} alt="todo project" />
        </a>
      </div>

      <div className="card-table">
        <h5>React todo-app</h5>
        <a
          href="https://react-todo-app-zhu.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={todo} alt="todo project" />
        </a>
      </div>
      <div className="card-table">
        <div className="card-table">
          <h5>React countdown-timer</h5>
          <a
            href="https://count-down-react.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={countdown} alt="countdown project" />
          </a>
        </div>
      </div>
      <div className="card-table">
        <div className="card-table">
          <h5>React meme-generator</h5>
          <a
            href="https://meme-generator-zhu.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={meme} alt="countdown project" />
          </a>
        </div>
      </div>
      <div className="card-table">
        <div className="card-table">
          <h5>React video player</h5>
          <a
            href="https://videoplayer-zhu.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={videoPlayer} alt="video project" />
          </a>
        </div>
      </div>
      <div className="card-table">
        <div className="card-table">
          <h5>React markdown previewer</h5>
          <a
            href="https://markdown-react-zhu.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={markdown} alt="video project" />
          </a>
        </div>
      </div>
    </div>
  )
}
