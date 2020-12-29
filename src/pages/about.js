import Link from 'next/link';

export default function About() {
    return (
        <div className="about">
            <p className="about-text">
                I am a
                <span className="text-red"> Full Stack Web Developer </span> 
                with +5 years of experience in developing applications for the world. 
                I have been the lead developer in many projects across the years, and I am a <a target="_blank" rel="noopener noreferrer" href="https://www.youracclaim.com/badges/10eb31fe-bec4-418b-b445-293e6835fb51/">Magento 2 Professional Developer</a> who worked on many aspects of Magento customization and development. 
                Lately I've getting into the world of JavaScript libraries and frameworks.
            </p>
            
            <p className="offered-services-text text-center">Offered Services</p>

            <div className="offered-services">
                <div className="icons">
                    <div className="row">
                        <div className="col-md-3 col-xs-12 text-center">
                            <span className="icon">
                                <i class="fas fa-desktop"></i>
                            </span>
                            <p className="icon-text">Web Development</p>
                        </div>
                        <div className="col-md-3 col-xs-12 text-center">
                            <span className="icon">
                                <i class="fab fa-magento"></i>
                            </span>
                            <p className="icon-text">Magento Development</p>
                        </div>
                        <div className="col-md-3 col-xs-12 text-center">
                            <span className="icon">
                                <i class="fas fa-mobile-alt"></i>
                            </span>
                            <p className="icon-text">Mobile Applications</p>
                        </div>
                        <div className="col-md-3 col-xs-12 text-center">
                            <span className="icon">
                                <i class="fas fa-server"></i>
                            </span>
                            <p className="icon-text">Server Support</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center">
                <Link href='/portfolio'>
                    <a>
                        <button className="btn center-block button">
                            <span>Portfolio</span>
                        </button>
                    </a>
                </Link>
            </div>
        </div>
    )
}