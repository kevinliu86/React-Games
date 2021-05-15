import React from 'react';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';
import './App.css';

export default function SideBar() {
  return (
    <div className="SideBar">
      <div className="logoDiv">
        <img src={logo} alt="logo" />
      </div>
      <Link to="/home">
        <p className="full-text">Home</p>
        <p className="short-text">H</p>
      </Link>
      <Link to="/tictactoe">
        <p className="full-text">Tictac</p>
        <p className="short-text">Ti</p>
      </Link>
      <Link to="/tower">
        <p className="full-text">Tower</p>
        <p className="short-text">To</p>
      </Link>
      <Link to="/snek">
        <p className="full-text">Snek</p>
        <p className="short-text">S</p>
      </Link>
    </div>
  );
}
