import React from 'react'
import { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from 'react-router-dom';
import '../style/home/projects/projectsGallery.css'
import ImgSwalkers from '../images/projets/swalkers.jpg'
import ImgIndys from '../images/projets/indys.jpg'
import ImgPorfolio from '../images/projets/portfolio.jpg'
import NoProject from '../images/projets/no-project.jpg'

export default function ProjectsGallery() {
    useEffect(() => {

      }, []);

  return (
    <div className='projects_gallery'>
        <ul className='column_1'>
            <li>
                <Link to="/projets/swalkers">
                    <img src={ImgSwalkers} alt="swalkers" />
                </Link>
            </li>
            <li>
                <img src={NoProject} alt="projet en cour" />
            </li>
        </ul>
        <ul className='column_2'>
            <li>
                <Link to="/projets/indys">
                    <img src={ImgIndys} alt="Indys" />
                </Link>
            </li>
            <li>
                <img src={NoProject} alt="projet en cour" />
            </li>
        </ul>
        <ul className='column_3'>
            <li>
                <img src={ImgPorfolio} alt="Porfolio" />
            </li>
            <li>
                <img src={NoProject} alt="projet en cour" />
            </li>
        </ul>
        <div className='overlay'></div>
    </div>
  )
}
