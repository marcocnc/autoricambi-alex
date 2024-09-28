import {useState, useEffect}    from 'react';

const Services = () => {

    const services = [
        {
            icon:'fa-people-group',
            name: 'Assistenza al banco'
        },
        {
            icon:'fa-truck',
            name: 'Consegna con mezzo aziendale'
        },
        {
            icon:'fa-wrench',
            name: 'Sostituzione materiale difettoso',              
        },
        {
            icon:'fa-car-battery',
            name: 'Deposito batterie esauste'
        }
    ]

    const [servicesArr, setServicesArr] = useState([]);

    useEffect(() => {
        setServicesArr(services);
    }, []);
    

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

            <div className="services-container row my-5">
                {
                    servicesArr &&
                    servicesArr.length > 0 &&
                    servicesArr.map((service, index) => {
                        const {icon, name} = service;

                        return (
                            <div className="col-12 col-lg-6 service" key={index}>
                                <i className={("fa-solid m-3 " + icon)}></i>
                                <span> {name} </span>
                            </div>
                        )
                    })
                }
            </div>
          
            <h6 className="second-title text-center">
                    Vuoi maggiori informazioni?
            </h6>
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