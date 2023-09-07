import React from 'react'
import '../style/home/schoolCareer/SlideSchoolCareer.css'
import IconJava from '../images/svg/icon-java.svg'
import IconSymfony from '../images/svg/icon-symfony.svg'
import IconJavascript from '../images/svg/icon-js.svg'
import IconHtml from '../images/svg/icon-html.svg'
import Iconcss from '../images/svg/icon-css.svg'
import IconAlgo from '../images/svg/icon-algo.svg'
import IconBdd from '../images/svg/icon-bdd.svg'
import IconReact from '../images/svg/icon-react.svg'
import IconVue from '../images/svg/icon-vue.svg'
import IconLaravel from '../images/svg/icon-laravel.svg'
import IconWordpress from '../images/svg/icon-wordpress.svg'
import IconPhp from '../images/svg/icon-php.svg'
import IconDrupal from '../images/svg/icon-drupal.svg'
import LinkSecondary from './LinkSecondary'

export default function SlideSchoolCarrer(props) {

  var assocLangages = {
    1: IconJava,
    2: IconSymfony,
    3: IconJavascript,
    4: IconHtml,
    5: Iconcss,
    6: IconAlgo,
    7: IconBdd,
    8: IconReact,
    9: IconVue,
    10: IconLaravel,
    11: IconWordpress,
    12: IconPhp,
    13: IconDrupal
  }

  return (
    <div className='slide'>
        <div className='slide_left'>
          {props.date}
        </div>
        <div className='slide_center'>  
            {props.logo}
        </div>
        <div className='slide_right'>
          <h3>{props.title}</h3>
          <p className='location'>{props.location}</p>
          <p className='description'>{props.description}</p>
          <ul className='langages'>
            {props.langages.map(langage => (
              <li key={langage}>
                <img src={assocLangages[langage]} alt={langage} />
              </li>
            ))}
          </ul>

          <LinkSecondary 
            url={props.link}
            text="Dévouvir la formation"
          />
        </div>
    </div>
  )
}
