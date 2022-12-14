import React from "react";
import githublogo from "./imgs/GitHub-Mark-Light-32px.png" 

const Footer = () => {
    return (
        <footer className="footer-container">
        <div className="footer-text-container">
        </div>
        <a href="https://github.com/Grace-Hopper-Capstone-Group-3/Grace-Shopper-Group-3.git" target="_blank">

          <div className="github-logo">
            <img src={githublogo}/>
          </div>
        </a>
      </footer>
    )
}

export default Footer