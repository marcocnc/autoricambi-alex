import clutch from '../../../assets/img/frizione.jpg';

const About = () => {
    return (
        <section id="about" className="section-divider">
            <div className="container">
                <div className="about-titles text-center mb-5">
                    <h2 className="mb-3">LA NOSTRA STORIA</h2>
                    <h6 className="second-title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nobis!
                    </h6>
                </div>

                <div className="divider-wrapper">
                    <div className="divider"></div>
                </div>

                <div className="story-container mt-5 d-flex flex-column flex-lg-row justify-content-between align-items-start">
                    <div className="story-content mt-lg-0 me-lg-5">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum soluta quisquam illum similique hic veritatis iusto autem aspernatur amet praesentium officiis sint ullam quibusdam alias nesciunt, assumenda officia! Corrupti modi rem hic, minus cum, numquam ducimus quibusdam necessitatibus provident at, optio nulla minima quas incidunt perspiciatis labore quos voluptate? Animi minus illum tempore, voluptas veritatis quia itaque assumenda distinctio placeat ducimus necessitatibus laudantium voluptatum temporibus eos tenetur. Harum consectetur deserunt laboriosam! Rerum, itaque eaque! Ad, nisi ipsa? Incidunt ea quaerat laborum, voluptatem sed nostrum corporis omnis consectetur nam iusto earum eius veritatis vitae, modi blanditiis, inventore necessitatibus temporibus a.</p>
                    </div>
                    
                    <div className="story-img mt-3 mt-lg-0">
                        <img src={clutch} alt="frizione" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;