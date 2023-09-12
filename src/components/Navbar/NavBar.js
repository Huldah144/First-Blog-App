import React, { useState } from 'react'
import Modal from '../Modal/Modal';
import { Outlet, Link } from 'react-router-dom';

const NavBar = () => {
    const [show, setShow] = useState(false);

    const showModal = () => {
        // console.log(show)
        setShow(!show)

    }

    return (
        <>
            <nav className='nav'>
                <a href="/" className="navbar-brand">
                    <span className='logo'>blogga</span>
                </a>

                <button className="btn btn-menu">
                    <i className="bi bi-menu"></i>
                </button>

                <div className="nav-wrapper">
                    <div className="navbar">

                        <Link to='/' className="nav-link">Home</Link>
                        <Link to='/design' className="nav-link">Design Tools </Link>
                        <Link to='/contact' className="nav-link">Contact</Link>
                        <Link to='/tutorials' className="nav-link">Tutorials</Link>
                        {/* <Link className="nav-link">Tutorials</Link>
                        <Link className="nav-link">Library</Link> */}
                       
                                {/* <a href="/design" className="nav-link">Design Tools</a>
                            <a href="/daily" className="nav-link">Daily Updates</a>
                            <a href="/tutorial" className="nav-link">Tutorials</a>
                            <a href="/library" className="nav-link">Library</a> */}
                           
                    </div>

                    <button className="btn btn-primary_inverse" onClick={showModal}>Subscribe</button>

                </div>
            </nav>
            {show ? <Modal /> : ''}
        </>
    )
}

export default NavBar
