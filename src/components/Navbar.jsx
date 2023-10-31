import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() 
{
    
  return (   
    <div>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/"><b>XYZ </b>News</Link>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style={{'--bsScrollHeight': '100px'}}>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/ENTERTAINMENT">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/SPORTS">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/TECHNOLOGY">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/GLOBAL">Global</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/HEALTH">Health</Link>
                        </li>   
                    </ul>
                </div>
            </div>
       </nav>
    </div>
  )
}

export default Navbar
