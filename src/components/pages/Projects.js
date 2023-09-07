import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { Link } from 'react-router-dom';
import LinkSecondary from "../LinkSecondary"
import ScrollTrigger from 'gsap/ScrollTrigger';
import "../../style/pages/Projects.css"
import ProjectsGallery from '../ProjectsGallery';

export default function Projects() {
    useEffect(() => {
        let homepageElement = document.querySelector('#content-page');
        if (homepageElement) {
            homepageElement.classList.remove('dark');
            ScrollTrigger.getAll().forEach(instance => instance.kill());
        }

        const cursor = document.getElementById('customized-cursor');
        gsap.set(cursor, {xPercent: -50, yPercent: -50});
        let xTo = gsap.quickTo(cursor, "x", {duration: 0.6, ease: "power3"}),
        yTo = gsap.quickTo(cursor, "y", {duration: 0.6, ease: "power3"});
    
        window.addEventListener("mousemove", e => {
          xTo(e.clientX);
          yTo(e.clientY);    
        });
      }, []);
  return (
    <div className='page_projects interne'>
        <div className='content'>
            <LinkSecondary 
                    url="/"
                    text="Accueil"
                />
            <h1>Mes Projets</h1>
            <div className='container'>
                <div id='customized-cursor'>Découvrir</div>
                <ProjectsGallery />
            </div>
        </div>
    </div>
  )
}
