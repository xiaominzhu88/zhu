import PropTypes from 'prop-types'
import React from 'react'
import pres from '../images/pres.jpg'
import fan from '../images/fan.png'

function Main({
  onCloseArticle,
  setWrapperRef,
  timeout,
  isArticleVisible,
  article,
  articleTimeout,
}) {
  let close = <div className="close" onClick={() => onCloseArticle()}></div>

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
          <img src={pres} alt="" />
        </span>
        <p>
          I'm at the beginning of this exciting development journey and I
          understand there are lots of improvements. <br />
          I've included some of my recently web application projects here.
        </p>
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
          Contact{' '}
          <span role="img" aria-label="emoji">
            💛
          </span>
        </h2>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
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
