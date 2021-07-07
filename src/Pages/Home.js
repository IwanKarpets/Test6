import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="open">
            <h1>
                Home
            </h1>
            <div>
                <Link to="/employess">/ Open page Employees</Link>
            </div>
        </div>
    )
}

export default Home
