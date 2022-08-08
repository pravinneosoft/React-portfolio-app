import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars,FaReact} from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
import '../navbar/style.scss'
const data=[
    {
        lable:'Home',
        to:'/'
    },
    {
        lable:'About Me',
        to:'/about'
    },
    {
        lable:'skills',
        to:'/skills'
    },
    {
        lable:'Resume',
        to:'/resume'
    },
    {
        lable:'portfoilo',
        to:'/portfoilo'
    }
]

const Navbar=()=>{
    const [toggleIcon,setToggleIcon]=useState(false);
    const handleToggle=()=>{
        setToggleIcon(!toggleIcon); 
    }
    return(
    <>
    <nav className="navbar">
        <div className="navbar_container">
            <Link to={'/'}className="navbar_container_logo">
            <FaReact size={30} />
            </Link>
        </div>
        <ul className={`navbar_container_menu ${toggleIcon ? "active":""}`}>
         {
             data.map((item, key)=> (
             <li key={key} className="navbar_container_menu_item">
                <Link className="navbar_container_menu_item_links" to={item.to}>
                   {item.lable}
                </Link>
              </li>
             ))
            }
            </ul>
            <div className="nav-icon"onClick={handleToggle}>
{
    toggleIcon ? <HiX size={30}/> : <FaBars size={30} />
}
            </div>
    </nav>
    </>   
    )
}
export default Navbar