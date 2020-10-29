import PropTypes from 'prop-types'
import React from 'react'
import xm from '../images/xm.png'

const Header = ({ onOpenArticle, timeout }) => (
  <header id="header" style={timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span>
        <img src={xm} alt="profile" />
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1> Hi! I'm Xiaomin Zhu</h1>
        <p>I create beautiful & functional user interfaces </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
