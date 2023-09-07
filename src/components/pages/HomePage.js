import React from 'react'
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from '../sections/Slider'
import Intro from '../sections/Intro'
import Projects from '../sections/Projects'
import SchoolCareer from '../sections/SchoolCareer'
import ExperiencePro from '../sections/ExperciencePro'
import Header from '../Header';

export default function HomePage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Dark mode when section-project come in 
    let homepageElement = document.querySelector('#content-page');
    if (homepageElement) {
      gsap.to(homepageElement, {
        scrollTrigger: {
          trigger: "#section-projects",
          markers: false,
          start: "top 10%",
          end: 'bottom bottom',
          onEnter: () => {
            homepageElement.classList.add('dark');
            
          },
          onLeaveBack: () => {
            homepageElement.classList.remove('dark');
          },
        }
      });
    }

    // Open slide when slide come in
    const slides = gsap.utils.toArray(".school_career .slider_wrapper .slide");
    slides.forEach((slide) => {
      gsap.to(slide, {
        scrollTrigger: {
          trigger: slide,
          markers: false,
          start: "top 50%",
          end: 'bottom 50%',
          toggleClass: 'js-active'
        }
      });
    });


    // Display projects column 
    const column1 = document.querySelector('#section-projects .column_1');
    const column2 = document.querySelector('#section-projects .column_2');
    const column3 = document.querySelector('#section-projects .column_3');

    gsap.fromTo(column1, {y: 100, autoAlpha: 0}, {
      y: 0,
      autoAlpha: 1,
      duration: .8,
      delay: .5,
      scrollTrigger: {
        trigger: '#section-projects',
        toggleActions: 'play none none reverse',
        markers: false,
        start: "top 10%",
        end: 'bottom bottom',
      }
    });
    gsap.fromTo(column2, {y: 100, autoAlpha: 0}, {
      y: 0,
      autoAlpha: 1,
      duration: .8,
      scrollTrigger: {
        trigger: '#section-projects',
        toggleActions: 'play none none reverse',
        start: "top 10%",
        end: 'bottom bottom',
      }
    });
    gsap.fromTo(column3, {y: 100, autoAlpha: 0}, {
      y: 0,
      autoAlpha: 1,
      duration: .8,
      delay: .8,
      scrollTrigger: {
        trigger: '#section-projects',
        toggleActions: 'play none none reverse',
        start: "top 10%",
        end: 'bottom bottom',
      }
    });

    const cursor = document.getElementById('customized-cursor');
    gsap.set(cursor, {xPercent: -50, yPercent: -50});
    let xTo = gsap.quickTo(cursor, "x", {duration: 0.6, ease: "power3"}),
    yTo = gsap.quickTo(cursor, "y", {duration: 0.6, ease: "power3"});

    window.addEventListener("mousemove", e => {
      xTo(e.clientX);
      yTo(e.clientY);    
    });

    gsap.fromTo(cursor, {autoAlpha: 0}, {
      autoAlpha: 1,
      duration: .4,
      scrollTrigger: {
        trigger: '#section-projects > .container',
        toggleActions: 'play none none reverse',
        start: "top 10%",
        end: 'bottom bottom',
      }
    });
    /*
    const marqueeLangages =  document.querySelectorAll(".school_career .slider_wrapper .langages li");
    marqueeLangages.forEach(el => {
      let rate = 50;
      let distance = el.clientWidth;
      let style = window.getComputedStyle(el);
      let marginRight = parseInt(style.marginRight) || 0;
      let totalDistance = distance + marginRight;
      let time = totalDistance / rate;
      let container = el.parentElement;
      gsap.to(container, time, {
        repeat: -1,
        x: '-'+totalDistance,
        ease: "none",
       });
    });
    */

    let marquee = document.querySelectorAll('.marquee span');
    marquee.forEach(el => {
      let rate = 100;
      let distance = el.clientWidth;
  
      let style = window.getComputedStyle(el);
      let marginRight = parseInt(style.marginRight) || 0;
      let totalDistance = distance + marginRight;
      let time = totalDistance / rate;
      let container = el.parentElement;
      gsap.to(container, time, {
        repeat: -1,
        x: '-'+totalDistance,
        ease: "none",
       });
    });
  }, []);
  return (
    <div className='homepage'>
      <div className='content'>
        <Header />
        <Slider />
        <Intro />
        <SchoolCareer />
        <ExperiencePro />
        <Projects />
      </div>
    </div>
  )
}
