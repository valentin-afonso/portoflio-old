import React from 'react'
import Slide from '../components/SlideSchoolCarrer'
import '../style/home/schoolCareer/SliderSchoolCareer.css'
import LogoEcv from './logo/LogoEcv'
import LogoEsupec from './logo/LogoEsupec'
import LogoIutNantes from './logo/LogoIutNantes'
import LogoJ from './logo/LogoJ'

export default function SliderSchoolCareer() {
    var langagesLycee = [4,5,6];
    var langagesBts = [1,2,3,4,5,6,7,12];
    var langagesLicence = [1,2,3,4,5,7,12];
    var langagesMaster = [2,3,4,5,12,8,9,10,11];
  return (
    <div className='slider_wrapper'>
        <Slide 
            logo={<LogoJ />} 
            title="Bac Scientifique"
            date="2016-2018"
            location="Les Herbiers"
            link="https://jean23-herbiers.com"
            langages={langagesLycee}
            description="Option ISN Informatique et Science du Numérique forme aux bases de l'informatique et des technologies numériques, prépare et les sensibilise aux enjeux numériques."
        />
        <Slide 
            logo={<LogoEsupec />} 
            title="BTS SIO"
            date="2018-2020"
            location="Cholet"
            link="https://www.saintemarie-cholet.eu/esupec"
            langages={langagesBts}
            description="Le BTS SIO (Service Informatique aux Organisations) est une formation axée sur l'informatique et les systèmes d'information. Prépare à la gestion des services informatiques au sein des entreprises, couvrant la programmation, la gestion de projets, la sécurité informatique et la maintenance des systèmes."
        />
        <Slide 
            logo={<LogoIutNantes />} 
            title="Licence Pro MiAR"
            date="2020-2021"
            location="Nantes"
            link="https://iutnantes.univ-nantes.fr"
            langages={langagesLicence}
            description="La Licence Pro MiAR (Métier de l'Informatique : Application Répartie) est une formation axée sur le développement d'applications distribuées. Prépare à concevoir, développer et gérer des systèmes informatiques répartis."
        />
        <Slide 
            logo={<LogoEcv />} 
            title="Master developpement web"
            date="2021-2023"
            location="Nantes"
            link="https://www.ecv.fr/digital/mastere-developpement-web"
            langages={langagesMaster}
            description="Le Master en Développement Web vise à former des développeurs web polyvalents, capables de travailler tant sur les solutions front-end que back-end. Il encourage le développement d'une culture professionnelle digitale, renforce l'autonomie, la pensée critique et les compétences en travail d'équipe. Prépare également au design web, l'UX, l'UI, le Web marketing et l'innovation."
        />
      </div>
  )
}
