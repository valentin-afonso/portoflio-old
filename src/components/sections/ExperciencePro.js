import React, { useState ,useEffect } from 'react'
import '../../style/home/experiencePro/ExperiencePro.css'
import Experience from '../Experience'
import Img from '../../images/experience/bg-kline.webp' 
import ImgUpmotion from '../../images/experience/bg-upmotion.jpg' 
import ImgSib from '../../images/experience/bg-sib.jpg' 
import ImgFleurymichon from '../../images/experience/bg-fleurymichon.png' 

export default function ExperciencePro() {
  var skillKline = [1,2,3];
  var techSib = [4,5];
  var techFleurymichon = [4,5,12,13];
  var techKline = [2,3,4,5,13,14];
  var techUpmotion = [2,3,4,5,15,16];

  var lineupExp = [0,1,2,5] 

  const [activeBullet, setActiveBullet] = useState(5);
  // const [lineActive, setLineActive] = useState(65*activeBullet + 17*activeBullet);


  const handleBulletClick = (bulletIndex) => {
    setActiveBullet(bulletIndex);
    // setLineActive(65*bulletIndex + 17*bulletIndex)
    var width = 65*bulletIndex + 17*bulletIndex
    document.querySelector('.line_active').style.width = `${width}px`
  };

  const handleNewsExp = () => {
    console.log(activeBullet)
    var closestGreater = null;

    for (var i = 0; i < lineupExp.length; i++) {
        if (lineupExp[i] > activeBullet) {
            if (closestGreater === null || lineupExp[i] < closestGreater) {
                closestGreater = lineupExp[i];
            }
        }
    }
    if (closestGreater === null) {
        closestGreater = Math.max(...lineupExp);
    }
    setActiveBullet(closestGreater);

  }

  useEffect(() => {
    var width = 65*activeBullet + 17*activeBullet
    document.querySelector('.line_active').style.width = `${width}px`
  })

  return (
    <div className='experience_pro' id='section-experience-pro'>
      <h2>Experience professionnelles</h2>
      <div className='container_frise'>
        <div className='line'></div>
        <div className='line_active'></div>
        <span className={`bullet ${activeBullet === 0 ? 'active' : ''}`} data-date="2018" onClick={() => handleBulletClick(0)}></span>
        <span className={`bullet ${activeBullet === 1 ? 'active' : ''}`} data-date="2019" onClick={() => handleBulletClick(1)}></span>
        <span className={`bullet ${activeBullet === 2 ? 'active' : ''}`} data-date="2020" onClick={() => handleBulletClick(2)}></span>
        <span className={`bullet ${activeBullet === 3 ? 'active' : ''}`} data-date="2021" onClick={() => handleBulletClick(3)}></span>
        <span className={`bullet ${activeBullet === 4 ? 'active' : ''}`} data-date="2022" onClick={() => handleBulletClick(4)}></span>
        <span className={`bullet ${activeBullet === 5 ? 'active' : ''}`} data-date="2023" onClick={() => handleBulletClick(5)}></span>
      </div>
      <div className='container_experiences'>
      <Experience 
        cover={ImgSib}
        date="2018"
        duree="1mois"
        status="Stage"
        title="Développement SIB"
        description="..."
        skill={skillKline}
        langages={techSib}
        className={activeBullet === 0 ? 'js-active' : ''}
      />
      <Experience 
        cover={ImgFleurymichon}
        date="2019"
        duree="1mois"
        status="Stage"
        title="Développement web Fleury Michon"
        description="..."
        skill={skillKline}
        langages={techFleurymichon}
        className={activeBullet === 1 ? 'js-active' : ''}
      />
      <Experience 
        cover={Img}
        date="2020-2021"
        duree="1an"
        status="Alternance"
        title="Développement web K.Line"
        description="Développement du site pro de K.Line & projet de développement d'application mobile"
        skill={skillKline}
        langages={techKline}
        className={activeBullet === 2 ? 'js-active' : ''}
      />
      <Experience 
        cover={ImgUpmotion}
        date="2021-2023"
        duree="2an"
        status="Alternance"
        title="Développement web Upmotion"
        description="Développement de site web au sein de l'agence Upmotion"
        skill={skillKline}
        langages={techUpmotion}
        className={(activeBullet === 3 || activeBullet === 4 || activeBullet === 5) ? 'js-active' : ''}
      />
      </div>
      <button className='link secondary' onClick={() => handleNewsExp()}>
        Prochaine experience
        <svg className="svg_arrow" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75 23C5.75 25.2653 6.19618 27.5084 7.06308 29.6013C7.92997 31.6942 9.2006 33.5958 10.8024 35.1976C12.4042 36.7994 14.3058 38.07 16.3987 38.9369C18.4916 39.8038 20.7347 40.25 23 40.25C25.2653 40.25 27.5084 39.8038 29.6013 38.9369C31.6942 38.07 33.5958 36.7994 35.1976 35.1976C36.7994 33.5958 38.07 31.6942 38.9369 29.6013C39.8038 27.5084 40.25 25.2653 40.25 23C40.25 18.425 38.4326 14.0374 35.1976 10.8024C31.9626 7.56741 27.575 5.75 23 5.75C18.425 5.75 14.0374 7.56741 10.8024 10.8024C7.56741 14.0374 5.75 18.425 5.75 23Z" stroke="black" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M30.6666 23L23 15.3334" stroke="black" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M30.6666 23H15.3333" stroke="black" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23 30.6667L30.6666 23" stroke="black" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg> 
    </button>
    </div>
  )
}
