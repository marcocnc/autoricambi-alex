import { useState, useEffect } from 'react';
import logo from '../../../assets/img/logo.jpg';
import '../../../scss/partials/Header/header.scss';

const Navbar = () => {

    const navItems = [
        {
            href: '#',
            item: 'Home'
        },
        {
            href: '#',
            item: 'Chi siamo'
        },
        {
            href: '#',
            item: 'I nostri marchi'
        },
        {
            href: '#',
            item: 'Dove siamo'
        },
        {
            href: '#',
            item: 'Contatti'
        },
    ]

    const [navBarArr, setNavBarArr] = useState([]);

    useEffect(() => {
        setNavBarArr(navItems);
    }, []);
    

    return (
        <header id="main-header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img className="logo" src={logo} alt="logo"/>
                        </a>
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarNavDropdown" 
                            aria-controls="navbarNavDropdown" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ms-4" id="navbarNavDropdown">
                            <ul className="navbar-nav d-flex justify-content-between w-100">
                                {
                                    navBarArr && 
                                    navBarArr.length > 0 &&
                                    navBarArr.map((listItem, index) => {
                                        const {href, item} = listItem;
                                        return (
                                            <li key={index} className="nav-item">
                                                <a className='nav-link' href={href}>
                                                    {item}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;