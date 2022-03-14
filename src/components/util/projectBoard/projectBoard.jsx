import React from 'react'
import './projectBoard.css'
import ProjectTemplate from './projectTemplate/projectTemplate'




function ProjectBoard(props) {
  return (
    <div className='project-board'>
      {
        props.data.map((project, i) => {
          return <ProjectTemplate key={i} data={project}/>
        })
      }
    </div>
  )
}

export default ProjectBoard