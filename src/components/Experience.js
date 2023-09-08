import React from 'react'
import '../style/home/experiencePro/Experience.css'
import IconCalendar from './svg/IconCalendar'
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
import IconIonic from '../images/svg/icon-ionic.svg'
import IconContao from '../images/svg/icon-contao.svg'
import IconPrestashop from '../images/svg/icon-prestashop.svg'

export default function Experience(props) {
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
        13: IconDrupal,
        14: IconIonic,
        15: IconContao,
        16: IconPrestashop
      }
      var assocLibelleLangages = {
        1: "Java",
        2: "Symfony",
        3: "Javascript",
        4: "Html",
        5: "CSS",
        6: "Algo",
        7: "BDD",
        8: "React",
        9: "Vue JS",
        10: "Laravel",
        11: "Wordpress",
        12: "PHP",
        13: "Drupal",
        14: "Ionic",
        15: "Contao",
        16: "Prestashop"
      }

      var skills = {
        1: "Collaboration",
        2: "Ouverture d'esprit",
        3: "Professionnalisme",
        4: "Autonomie/Autodidacte",
        5: "Organisation/Gestion du temps",
        6: "Pédégogue",
        7: "Méthodologie",
        8: "Adaptabilité",
        9: "Communication",
        10: "Pensée critique",
        11: "Créativité"
      }
  return (
    <div className={`experience ${props.className}`}>
        <div className='content_left'>
            <img src={props.cover} alt="" />
        </div>
        <div className='content_right'>
            <div className='info_header'>
                <p className='experience_status'>{props.status}</p>
                <div className='experience_duree'><IconCalendar /><p>{props.duree}</p></div>
            </div>
            <p className='experience_title'>{props.title}</p>
            <p className='experience_description'>{props.description}</p>
            <div className='experience_card'>
                <div className='progress'>
                    <h3>Skills</h3>
                    <ul>
                    {props.skill.map(skill => (
                        <li key={skill}>{skills[skill]}</li>
                    ))}
                    </ul>
                </div>
                <div className='langages'>
                    <h3>Tech</h3>
                    <ul>
                    {props.langages.map(langage => (
                    <li key={langage}>
                        <img src={assocLangages[langage]} alt={assocLibelleLangages[langage]} />
                        <span>{assocLibelleLangages[langage]}</span>
                    </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
