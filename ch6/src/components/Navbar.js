import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <h2 className='title'>Fabuloso Blog</h2>
            <div>
                <ul className='ulStyle'>
                    <li><Link to="/Login">Iniciar Sesión</Link></li>
                    <li><Link to="/AllPost">Historias</Link></li>
                </ul> 
            </div>     
        </div>
    )
} 