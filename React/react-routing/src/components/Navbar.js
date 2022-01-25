import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return <div>
      <nav>
          <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/game">Play a Game</Link></li>
          </ul>
      </nav>
  </div>;
}
