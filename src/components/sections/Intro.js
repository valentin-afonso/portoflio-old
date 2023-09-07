import React from 'react'
import '../../style/home/intro/Intro.css'
import imgProfil from '../../images/img-profil.jpg';

export default function Intro() {
  return (
    <div className='intro' id='section-intro'>
        <h1>Porfolio Valentin Afonso</h1>
        <div className='content_left'>
            <div className='card'>
                <figure>
                    <img src={imgProfil} className='img_profil' alt='valentin afonso' width='146' height='146'/>
                </figure>
                <div className='content_text'>
                J'ai 23 ans et je suis actuellement en train de suivre un Master en Développement Web. 
                Mon domaine de spécialisation est principalement orienté vers le front-end, 
                mais je suis ouvert à explorer d'autres aspects du développement web, comme le back-end, 
                l'UX/UI, et bien plus encore. En ce moment, je suis particulièrement motivé à approfondir mes 
                connaissances en React, un framework qui m'attire beaucoup.
                </div>
            </div>
        </div>
        <div className='content_right'>
            <h2>Qui suis<span className='fligen'>-</span>je <span className='fligen'>?</span></h2>
        </div>
    </div>
  )
}
