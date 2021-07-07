import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <header>
            <ul className="navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/employess">Employees</Link></li>
            </ul>
        </header>
    )
}

export default Navbar
