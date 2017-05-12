import React from 'react';
import { NavLink } from 'react-router-dom';

export class Navigation extends React.Component {

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer App
            </li>
            <li>
              <NavLink to="/" exact activeClassName="active-link">Timer</NavLink>
            </li>
            <li>
              <NavLink to="/Countdown" activeClassName="active-link" >Countdown</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
                Created by <a href='#' target="_blank">ArK B.</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
