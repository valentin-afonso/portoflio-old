import React from 'react'
import Mockup from '../Mockup'
import CallToScroll from '../CallToScroll'
import '../../style/slider/Slider.css'
import Pastille from '../svg/Pastille'

export default function Slider() {
  return (
    <div className='slider' id='section-slider'>
      <div className='slider_top'>
        <div className='slider_name'>
            <p className='first_name'>Valentin</p>
            <p className='last_name'>Afonso</p>
        </div>
        <Pastille />
        <div className='slider_mockup'>
            <Mockup />
        </div>
      </div>
      <div className='slider_bottom'>
      <div className="container-marquee">
        <div className='marquee'>
            <span>Présentation oral professionnel - ECV</span>
            <span>Présentation oral professionnel - ECV</span>
            <span>Présentation oral professionnel - ECV</span>
            <span>Présentation oral professionnel - ECV</span>
        </div>
      </div>
        <CallToScroll />
      </div>
        

    </div>
  )
}
