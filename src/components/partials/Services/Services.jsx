import { Splide, SplideSlide } from '@splidejs/react-splide';


const Services = () => {
    return (
        <section id="services" className="section-divider py-4">
        <div className="container text-white">
            <div className="services-titles text-center mb-5">
                <h2 className="mb-3">I NOSTRI SERVIZI</h2>
                <h6 className="second-title">
                   I servizi che offriamo ai nostri clienti
                </h6>
            </div>   

            <div className="divider-wrapper">
                <div className="divider"></div>
            </div>

            {/* <ul className="services-list mt-5 ps-0">
                <li className="my-3 p-4">
                    <i className="fa-solid fa-people-group m-3"></i>
                    <span>Assistenza al banco</span>
                </li>
                <li className="my-3 p-4">
                    <i className="fa-solid fa-truck m-3"></i>
                    <span>Consegna materiale con furgone aziendale</span>
                </li>
                <li className="my-3 p-4">
                    <i className="fa-solid fa-wrench m-3"></i>
                    <span>Sostituzione materiale difettoso</span>
                </li>
                <li className="my-3 p-4">
                    <i className="fa-solid fa-car-battery m-3"></i>
                    <span>Deposito batterie esauste</span>
                </li>
                <li className="my-3 p-4">
                    <i className="fa-regular fa-user m-3"></i>
                    <span>Servizio</span>
                </li>
            </ul>     */}

            <Splide className="services-list">
                <SplideSlide>
                <i className="fa-solid fa-people-group m-3"></i>
                <span>Assistenza al banco</span>
                </SplideSlide>
                <SplideSlide>
                    <img src="image2.jpg" alt="Image 2"/>
                </SplideSlide>
            </Splide>

            {/* <section
                id="thumbnail-carousel"
                className="splide services-list mt-5 ps-0"
                aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
            >
                <div className="splide__track">
                    <ul className="splide__list">
                        <li className="my-3 p-4">
                            <i className="fa-solid fa-people-group m-3"></i>
                            <span>Assistenza al banco</span>
                        </li>
                        <li className="my-3 p-4">
                            <i className="fa-solid fa-truck m-3"></i>
                            <span>Consegna materiale con furgone aziendale</span>
                        </li>
                        <li className="my-3 p-4">
                            <i className="fa-solid fa-wrench m-3"></i>
                            <span>Sostituzione materiale difettoso</span>
                        </li>
                        <li className="my-3 p-4">
                            <i className="fa-solid fa-car-battery m-3"></i>
                            <span>Deposito batterie esauste</span>
                        </li>
                    </ul>
                </div>
            </section> */}

            <div className="whatsapp-container mt-5">
                <a href="#" className="btn whatsapp-btn">
                    <i className="fa-brands fa-whatsapp"></i>
                    <span>Contattaci</span>
                </a>
            </div>
        </div>
    </section>
    )
}

export default Services;