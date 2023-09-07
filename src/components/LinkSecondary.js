import React from 'react'
import { Link } from 'react-router-dom';
import "../style/component/LinkSecondary.css"

// eslint-disable-next-line
export default function(props) {
  return (
    <Link to={props.url} className='link secondary'>
        {props.text}
        <svg className="svg_arrow" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75 23C5.75 25.2653 6.19618 27.5084 7.06308 29.6013C7.92997 31.6942 9.2006 33.5958 10.8024 35.1976C12.4042 36.7994 14.3058 38.07 16.3987 38.9369C18.4916 39.8038 20.7347 40.25 23 40.25C25.2653 40.25 27.5084 39.8038 29.6013 38.9369C31.6942 38.07 33.5958 36.7994 35.1976 35.1976C36.7994 33.5958 38.07 31.6942 38.9369 29.6013C39.8038 27.5084 40.25 25.2653 40.25 23C40.25 18.425 38.4326 14.0374 35.1976 10.8024C31.9626 7.56741 27.575 5.75 23 5.75C18.425 5.75 14.0374 7.56741 10.8024 10.8024C7.56741 14.0374 5.75 18.425 5.75 23Z" stroke="black" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M30.6666 23L23 15.3334" stroke="black" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M30.6666 23H15.3333" stroke="black" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23 30.6667L30.6666 23" stroke="black" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg> 
    </Link>
  )
}
