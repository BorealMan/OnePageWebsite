import React from 'react'
import ProjectBoard from '../../util/projectBoard/projectBoard'
import './projectspage.css'
import YahtzeeImg from '../../../assets/yahtzee-game-img.png'
import SudokuImg from '../../../assets/sudokudemo.png'

function ProjectsPage() {

  function GoToContact() {
    let pageHeight = window.innerHeight
    console.log(pageHeight)
    window.scroll(0, pageHeight*2) 
  }

  function GoToGithub() {
    window.location.href="https://github.com/BorealMan"
  }

  const myProjects = [
    {img:YahtzeeImg, title:"Yahtzee Score Board", description:"Who wants to keep track of a yathzee game by hand? I created this web app so that me and my friends could see the score realtime."},
    {img:SudokuImg, title:"Sudoku", description:"Sudoku is a cool game."}
  ]

  return (
    <div className='projects-page'>
        <ProjectBoard data={myProjects}/>
        <button className='button-grid-button-external' onClick={GoToGithub}>Github</button>
        <button className='button-grid-button-internal' onClick={GoToContact}>Contact</button>
    </div>
  )
}

export default ProjectsPage