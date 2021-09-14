/* eslint-disable */
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'gatsby'

import toggle from '../images/menu.svg'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    const classDropdownMenu =
      'navigation navbar-nav' + (this.state.collapsed ? ' collapse' : '')

    return (
      <nav className="navbar navbar-expand-lg">
        <AnchorLink className="navbar-brand" offset="0" href="#Hero">
          <img src={this.props.logo.url} alt={this.props.sitename} />
        </AnchorLink>
        <ul className={classDropdownMenu} id="navbarSupportedContent">
          {this.props.menu.map(item =>
            item.url.charAt(0) === '#' ? (
              <li className="nav-item">
                <AnchorLink offset="63" href={item.url}>
                  {item.title}
                </AnchorLink>
              </li>
            ) : (
              <li className="nav-item">
                <Link to={item.url}>{item.title}</Link>
              </li>
            )
          )}
        </ul>

        <button
          onClick={this.toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbarNav"
          data-toggle="collapse"
          type="button"
        >
          <img src={toggle} alt="toggle" />
        </button>
      </nav>
    )
  }
}

export default Navigation
