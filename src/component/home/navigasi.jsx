import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigasi extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-pills justify-content-center my-3">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog">Blogs</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/card">Card</Link>
                  </li>
              </ul>
      </div>
    )
  }
}
