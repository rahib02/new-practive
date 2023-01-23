import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <div className='Navbar'>
            <Link to={"/"}><p className='navbar_bf201'>Bf201</p></Link>
            <div className='target'>
                <ul>
                    <li ><Link to={"/"}>Home</Link></li>
                    <li ><Link to={"add"}>Add</Link></li>
                </ul>
            </div>
            <button className='navbar_btn'>Contact</button>
        </div>
    )
}

export default Navbar