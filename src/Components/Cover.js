import React from 'react';
import './Cover.css'

const Cover = () => {
  return (
    <div className="cover">
      <div className="cover-background">
        <h1 className="cover-title container">AHMED TAHA</h1>
        <h2 className="cover-subtitle container">Web Developer</h2>
      </div>
      <div className="cover-overlay"></div>
    </div>
  );
}

export default Cover;