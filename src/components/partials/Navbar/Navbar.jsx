import logo from '../../../assets/img/logo.jpg';
import '../../../scss/partials/Header/header.scss';

const Navbar = () => {
    return (
        <header id="main-header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                      <a className="navbar-brand" href="#">
                        <img className="logo" src={logo} alt="logo"/>
                      </a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse ms-4" id="navbarNavDropdown">
                        <ul className="navbar-nav d-flex justify-content-between w-100">
                          <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">
                                Home
                            </a>
                          </li>
    
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                                Chi siamo
                            </a>
                          </li>
    
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                                I nostri marchi
                            </a>
                          </li>
    
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                                Dove siamo
                            </a>
                          </li>
    
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contatti
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
            </div>
         </header>
    )
}

export default Navbar;