import React from 'react'
import { Link } from 'react-router-dom';
import '../../style/home/projects/projects.css'
import ProjectsGallery from '../ProjectsGallery'

export default function Projects() {
  return (
    <div className='projects' id='section-projects'>
      <div className='container'>
      <div id='customized-cursor'>Découvrir</div>
      <h2>Mes projets</h2>
      <p className='text_intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
      <ProjectsGallery />
      </div>
      <Link to="/projets" className='link'>
          Découvrir tous mes projets
      </Link>
    </div>
  )
}
