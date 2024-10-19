import logo from '../../assets/img/logo.jpg';

const Footer = () => {
  return (
    <footer>
        <section className="container">
            <div className="footer-vertical-col">
                <div className="footer-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="footer-info">
                    <h2>Accessori e Ricambi Auto Alex</h2>
                    <p>Via Giacomo Leopardi 57-59</p>
                    <p>Volla (NA)</p>
                </div>
            </div>
        </section>
      
    </footer>
  )
}

export default Footer;