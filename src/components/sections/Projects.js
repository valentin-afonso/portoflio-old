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
      <p className='text_intro'>
      Pendant mes années d'études et au cours de mon expérience professionnelle, 
      j'ai eu l'occasion de mener à bien plusieurs projets de développement. <br />
      Découvrez mes projets !</p>
      <ProjectsGallery />
      </div>
      <Link to="/projets" className='link'>
          Découvrir tous mes projets
      </Link>
    </div>
  )
}
