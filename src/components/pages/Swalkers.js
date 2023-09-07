import React from 'react'
// import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from "react";
import "../../style/pages/Swalkers.css"
import LinkSecondary from "../LinkSecondary"
import LogoSwalkers from "../../images/projets/swalkers/logo.svg"
import Mockup1 from "../../images/projets/swalkers/mokup1.png"
import Mockup2 from "../../images/projets/swalkers/mockup2.png"
import ImgMap from "../../images/projets/swalkers/map.png"
import LogoFirebase from "../../images/svg/icon-firebase.svg"
import LogoReact from "../../images/svg/icon-react.svg"

export default function Swalkers() {
    
    useEffect(() => {
        let homepageElement = document.querySelector('#content-page');
        if (homepageElement) {
            homepageElement.classList.add('dark');
            ScrollTrigger.getAll().forEach(instance => instance.kill());
        }
        return () => {
            if (homepageElement) {
              homepageElement.classList.remove('dark');
            }
        };
    }, [])
  return (
    <div className='page_swalkers interne'>
        <div className='content'>
            <div className='section_top'>
                <h1>Swalkers</h1>
                <p className='text_intro'>
                    Swalkers est un projet d'application traitant sur la thématique du mouvement 
                    et développé au cour de mon master Développement web.
                </p>
            </div>
            <div className='section_1'>
                <p><strong>SWALKERS</strong> a pour ambition de favoriser la sécurité et la tranquillité des utilisateurs 
                    lors de leurs déplacements. En prônant l’idée qu’ensemble nous sommes plus forts, 
                    son objectif est de réduire les incidents en encourageant la solidarité entre les utilisateurs 
                    et en offrant l’itinéraire le plus sécurisé possible</p>
                <img src={LogoSwalkers} alt="Swalkers" className='logo_swalkers'/>
                <img src={Mockup1} alt="" className='img_mockup'/>
            </div>
            <div className='section_2'>
                <h2>Déplacez-vous &nbsp;à plusieurs</h2>
                <div className='content_left'>
                    <h3>Réjoignez des points de rassemblement</h3>
                    <p><strong>SWALKERS</strong> propose des trajets communs en fonction de la destination 
                    des utilisateurs. Ces derniers peuvent rejoindre l'un des points de rassemblement suggérés 
                    et effectuer leur trajet ensemble.</p>
                </div>
                <div className='content_right'>
                    <h3>Un groupe de confiance</h3>
                    <p>Pour garantir la sécurité de chacun, tous les utilisateurs ont préalablement fourni 
                        certaines de leurs données personnelles comme leurs cartes d'identité. Ainsi, 
                        si un problème survient au sein d’un groupe, il sera plus facile d’identifier et de 
                        sanctionner les utilisateurs malveillants. Pour les Femmes, SWALKERS propose également 
                        de créer des groupes avec des utilisateurs du même sexe.</p>
                </div>
            </div>
            <div className='section_3'>
                <img src={ImgMap} alt="" />
            </div>
            <div className='section_4'>
                <div className='content_left'>
                    <h2>Réaliser le trajet le plus &nbsp;sûr</h2>
                    <ul className='filters'>
                        <li className='filter_yellow'>
                            <img src="" alt="" />
                            <span>Eclairage</span>
                        </li>
                        <li className='filter_red'>
                            <img src="" alt="" />
                            <span>Incidents</span>
                        </li>
                        <li className='filter_blue'>
                            <img src="" alt="" />
                            <span>Refuges</span>
                        </li>
                    </ul>
                    <h3>Une carte intéractive</h3>
                    <p><strong>SWALKERS</strong> offre plusieurs fonctionnalités pour aider les utilisateurs à 
                    aborder leur trajet de manière plus sereine. Par exemple, l'application affiche les zones éclairées 
                    de la ville, les incidents reportés en temps réel par les autres utilisateurs et indique les 
                    lieux de refuge proches de leur position. Ces derniers peuvent être des commerces ouverts 
                    ou d'autres sites collaborant avec <strong>SWALKERS</strong>. <strong>SWALKERS</strong> permet 
                    également aux utilisateurs de signaler en temps réel les incidents qu'ils rencontrent.</p>
                </div>
                <div className='content_right'>
                    <img src={Mockup2} alt="" />
                </div>
            </div>
            <div className='section_tech'>
                <h2>Orientations &nbsp;techniques</h2>
                <ul>
                    <li>
                        <p>React/PWA</p>
                        <img src={LogoReact} alt="React" />
                    </li>
                    <li>
                        <img src={LogoFirebase} alt="Firebase" />
                        <p>Firebase</p>
                    </li>
                </ul>
            </div>
            <div className='section_bottom'>
                <LinkSecondary 
                    url="/projets"
                    text="Voir les autres projets"
                />
            </div>
        </div>
    </div>
  )
}
