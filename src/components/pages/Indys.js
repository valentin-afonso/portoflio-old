import React, { useState, useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "../../style/pages/Indys.css"
import LinkSecondary from "../LinkSecondary"
import ImgIndys from "../../images/projets/indys/img-indys.png"
import Mokup1 from "../../images/projets/indys/indys-mokup-0.png"
import Mokup2 from "../../images/projets/indys/indys-mokup-1.png"
import Mokup3 from "../../images/projets/indys/indys-mokup-2.png"
import Img_indys_cohere from "../../images/projets/indys/logo_indys_cohere.svg"
import LogoCss from "../../images/svg/icon-css.svg"
import LogoJs from "../../images/svg/icon-js.svg"

export default function Indys() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeInterval = 6000; 

  useEffect(() => {
    let homepageElement = document.querySelector('#content-page');
    if (homepageElement) {
        homepageElement.classList.remove('dark');
        ScrollTrigger.getAll().forEach(instance => instance.kill());
    }
    const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
      }, timeInterval);
    return () => clearInterval(interval); 
  }, []);
  return (
    <div className='page_indys interne'>
        <div className='content'>
            <div className='section_top'>
                <h1>Indys</h1>
                <p className='text_intro'>
                    Indys est un projet d'extension web traitant sur la thématique des handicapes légés 
                    et développé au cour de mon master Développement web.
                </p>
            </div>
            <div className='section_1'>
                <div className='content_text'>
                  <p>L'extension web <strong>INDYS</strong> apporte plusieurs solutions</p>
                  <ul>
                    <li>Propose des outils aidant la lecture et l’écriture</li>
                    <li>Installation facile et rapide sur le navigateur</li>
                    <li>Placée sur le panneau latéral du navigateur pour ne pas géner la lecture</li>
                    <li>Utilise de l’intelligence artificielle (pour résumer, reformuler, ...)</li>
                  </ul>
                </div>
                <img src={ImgIndys} alt="" className='img_mockup'/>
            </div>
            <div className='section_animated_mokup'>
              <p className={`title_text ${activeIndex === 0 ? 'js-active' : ''}`}>Site vitrine</p>
              <p className={`title_text ${activeIndex === 1 ? 'js-active' : ''}`}>Mode lecture</p>
              <p className={`title_text ${activeIndex === 2 ? 'js-active' : ''}`}>ia</p>
              <img src={Mokup1} alt="" className={`img_mockup ${activeIndex === 0 ? 'js-active' : ''}`} />
              <img src={Mokup2} alt="" className={`img_mockup ${activeIndex === 1 ? 'js-active' : ''}`} />
              <img src={Mokup3} alt="" className={`img_mockup ${activeIndex === 2 ? 'js-active' : ''}`} />
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
                
            </div>
            <div className='section_4'>
                <div className='content_left'>
                    <h2>L<span className='fligen'>'</span>IA au service de l<span className='fligen'>'</span>accessibilité</h2>
                    <p>En exploitant l'API fourni par <strong>Cohere</strong>, <strong>Indys</strong> offre aux utilisateurs la capacité de synthétiser 
                      ou de reformuler le contenu textuel présent sur n'importe quelle page web. 
                      Cette initiative vise à faciliter la lecture pour les personnes dyslexiques, 
                      en réduisant les obstacles qui peuvent entraver leur compréhension. Grâce à la puissance de 
                      l'intelligence artificielle, Indys transforme instantanément le texte d'origine en une version 
                      optimisée, rendant ainsi la lecture plus fluide et plus accessible. </p>
                </div>
                <div className='content_right'>
                    <img src={Img_indys_cohere} alt="" />
                </div>
            </div>
            <div className='section_tech'>
                <h2>Orientations &nbsp;techniques</h2>
                <ul>
                    <li>
                        <p>Javascript</p>
                        <img src={LogoJs} alt="Javascript" />
                    </li>
                    <li>
                        <img src={LogoCss} alt="css" />
                        <p>CSS</p>
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
