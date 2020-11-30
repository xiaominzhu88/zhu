import PropTypes from 'prop-types'
import React from 'react'
import pres from '../images/pres.jpg'
import fan from '../images/fan.png'
import NextJsProjects from './NextJsProjects'
import ReactProjects from './ReactProjects'

function Main({
  onCloseArticle,
  setWrapperRef,
  timeout,
  isArticleVisible,
  article,
  articleTimeout,
}) {
  let close = <div className="close" onClick={() => onCloseArticle()}></div>
  const [reactDisplay, setReactDisplay] = React.useState(false)
  const [nextDisplay, setNextDisplay] = React.useState(false)

  const showReact = () => {
    setReactDisplay(!reactDisplay)
    setNextDisplay(false)
  }
  const showNext = () => {
    setNextDisplay(!nextDisplay)
    setReactDisplay(false)
  }

  return (
    <div
      ref={setWrapperRef}
      id="main"
      style={timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="work"
        className={`${article === 'work' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">
          Work{' '}
          <span role="img" aria-label="emoji">
            💙
          </span>
        </h2>
        <span className="image main">
          <img src={pres} alt="work" />
        </span>
        <p>
          I'm at the beginning of this exciting development journey and I
          understand there are lots of improvements. <br />
          I've included some of my simple web application projects here.
        </p>

        <div>
          <button
            style={{
              backgroundColor: reactDisplay && '#c9e634',
              margin: '2rem auto',
              width: '14rem',
            }}
            onClick={showReact}
          >
            Simple React
          </button>
          <button
            style={{
              backgroundColor: nextDisplay && 'hotpink',
              margin: '2rem auto',
              width: '14rem',
            }}
            onClick={showNext}
          >
            NextJs Projects
          </button>
        </div>

        {nextDisplay && <NextJsProjects />}

        {reactDisplay && <ReactProjects />}

        {close}
      </article>

      <article
        id="about"
        className={`${article === 'about' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">
          About
          <span role="img" aria-label="emoji">
            💚
          </span>
        </h2>

        <span className="image main">
          <img src={fan} alt="about me" />
        </span>
        <p>Frontend Web Developer, Musician, Assistant Store Manager</p>
        {close}
      </article>

      <article
        id="contact"
        className={`${article === 'contact' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">
          Contact Me{' '}
          <span role="img" aria-label="emoji">
            💛
          </span>
        </h2>
        <form>
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Xiaomin Zhu"
              disabled
            />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="https://github.com/xiaominzhu88"
              disabled
            />
          </div>
          <div className="field">
            <label htmlFor="message">Thank you</label>
            <textarea name="message" id="message" rows="4" disabled>
              I love exploring the natural beauty of our planet through bike
              rides along the coastline of the ocean or visiting the world’s
              most fascinating cities. Want to start a new journey with me？
            </textarea>
          </div>
        </form>
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/Zhu23592976"
              className="icon fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/xiaominzhu/"
              className="icon fa-linkedin"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/xiaominzhu88"
              className="icon fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
        {close}
      </article>
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
