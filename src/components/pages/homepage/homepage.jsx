import React from 'react'
import './homepage.css'
import Infoboard from '../../util/InfoBoard/infoboard'

function Homepage() {

  function GoToGithub() {
    window.location.href="https://github.com/BorealMan"
  }

  function GoToContact() {
    let pageHeight = window.innerHeight
    console.log(pageHeight)
    window.scroll(0, pageHeight*2) 
  }

  function GoToProjects() {
    let pageHeight = window.innerHeight
    console.log(pageHeight)
    window.scroll(0, pageHeight) 
  }

  function GoToHome() {
    window.scroll(0, 0)
  }

  return (
    <div className='homepage'>
      <div className='logo' onClick={GoToHome} title='Go to the top'>RK</div>
      <div className='homepage-content'>
        <div className='homepage-content-left'>
          <h1 className='hero-name' title="That's me">Ryan Kehrli</h1>
          <p className='introduction' title='About me'>Hello I am a full stack developer, I work mostly in type script using react for the frontend and express for the backend. </p>
          <div className='button-grid'>
            <button className='button-grid-button-internal' onClick={GoToContact}>Contact</button>
            <div className='button-grid-bottom'>
              <button className='button-grid-button-internal' onClick={GoToProjects}>Projects</button>
              <button className='button-grid-button-external' onClick={GoToGithub} title='Go to my Github'>Github</button>
            </div>
          </div>
        </div>
        <div className='homepage-content-right'>
          <Infoboard data={[
            ["Skills", "HTML, CSS, JS/TS", "React", "RestAPI's, Websockets", "Relational Databases", "DNS, SSL, Linux"], 
            ["Education", "AS Computer Science (2021)", "AS Cyber Security (2020)", "AS Business Adminstration (2019)"],
            ["Certificates", "CompTIA Network+ (2020)"],
            ["Languages", "Javascript, Typescript", "Python", "Go", "C, C++, Java", "SQL"]
            ]}/>
        </div>
      </div>

    </div>
  )
}

export default Homepage