import React from 'react'
import './projectTemplate.css'
function ProjectTemplate(props) {
  return (
    <div className='project-template'>
        <img className='project-template-img' src={props.data.img} alt='project'/>
        <h3 className='project-template-title'>{props.data.title}</h3>
        <p className='project-template-description'>{props.data.description}</p>
    </div>
  )
}

export default ProjectTemplate