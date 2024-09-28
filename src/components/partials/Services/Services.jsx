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
            name: 'Sostituzione materiale difettoso'
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

            <div className="services-container row mt-5">
                {
                    servicesArr &&
                    servicesArr.length > 0 &&
                    servicesArr.map((service, index) => {
                        const {icon, name} = service;

                        return (

                            <>
                                <div className="col-12 col-lg-6 service" key={index} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i className={("fa-solid m-3 " + icon)}></i>
                                    <span> {name} </span>
                                </div>
                            
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            ...
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                            </>
                            
                        )
                    })
                }
            </div>

          
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