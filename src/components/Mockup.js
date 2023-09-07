import React, { useEffect } from "react";
import '../style/slider/Mockup.css'
import Typed from 'typed.js';

export default function Mockup() {

  useEffect(() => {
    const typed = new Typed('.typed_text', {
      strings: ['Oral pro ECV', 'Bienvenu sur mon portfolio 🔥'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='mockup'>
      <div className='mockup_top'>
        <div className='mockup_screen'>
          <div className='mockup_header'>
            <ul>
              <li>
                <span className='btn_close'></span>
              </li>
              <li>
                <span className='btn_reduce'></span>
              </li>
              <li>
                <span className='btn_extend'></span>
              </li>
            </ul>
          </div>
          <div className='mockup_body'>
              <p className='code'>
                <span className='chevron'>&#60;!</span><span className='red'>DOCTYPE</span><span className='purple'> html</span>&#62;<br />
                <span className='chevron'>&#60;</span><span className='red'>html</span><span className='green'> lang</span>=<span className='yelow'>"fr"</span>&#62;<br />
                <span className='chevron ml-1'>&#60;</span><span className='red'>head</span>&#62;<br />
                <span className='chevron ml-2'>&#60;</span><span className='red'>meta</span><span className='green'> charset</span>=<span className='yelow'>"UTF-8"</span>&#62;<br />
                <span className='chevron ml-2'>&#60;</span><span className='red'>title</span>&#62;
                    portfolio valentin Afonso
                    <span className='chevron'>&#60;</span><span className='red'>/title</span>&#62;<br />
                    <span className='chevron ml-1'>&#60;</span><span className='red'>/head</span>&#62;<br />
                    <span className='chevron ml-1'>&#60;</span><span className='red'>body</span>&#62;<br />
                    <span className='chevron ml-2'>&#60;</span><span className='red'>h1</span>&#62;
                    <span className='typed_text'>Bienvenu sur mon portfolio</span>
                    <span className='chevron'>&#60;</span><span className='red'>/h1</span>&#62;<br />
                    <span className='chevron ml-1'>&#60;</span><span className='red'>/body</span>&#62;<br />
                    <span className='chevron'>&#60;</span><span className='red'>/html</span>&#62;
              </p>
          </div>
        </div>
      </div>
      <div className='mockup_bottom'>
      <svg xmlns="http://www.w3.org/2000/svg" width="208" height="170" viewBox="0 0 208 170" fill="none">
  <g filter="url(#filter0_d_142_386)">
    <path d="M95.609 13.6505C97.2028 3.63247 111.574 3.49637 113.357 13.4824L119.671 48.8426C127.058 90.2052 154.518 125.192 192.941 142.194V142.194C197.746 144.321 196.228 151.5 190.974 151.5H17.6019C12.3482 151.5 10.8744 144.295 15.7061 142.232V142.232C55.3981 125.285 83.6002 89.1344 90.3811 46.5118L95.609 13.6505Z" fill="url(#paint0_linear_142_386)"/>
  </g>
  <defs>
    <filter id="filter0_d_142_386" x="0.767822" y="0.0644913" width="207.073" height="169.436" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="6"/>
      <feGaussianBlur stdDeviation="6"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_142_386"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_142_386" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_142_386" x1="103.985" y1="-39" x2="103.985" y2="151.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C2C2C2"/>
      <stop offset="1" stop-color="#F9FCFF"/>
    </linearGradient>
  </defs>
</svg>
      </div>
    </div>
  )
}
