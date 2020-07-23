import Link from 'next/link'

export default function About() {
    return (
        <div className="about">
            <p className="about-text">
                I am a
                <span className="text-red"> Full Stack Web Developer </span> 
                with +4 years of experience in developing applications for the world. 
                I have been the lead developer in many projects across the years. 
                I also am a <a target="_blank" rel="noopener noreferrer" href="https://u.magento.com/certification/directory/dev/2021818/">Magento 2 Professional Developer</a> and worked on many aspects of Magento customization and development. 
                Very proeficient in Linux based systems. Lately I’ve been also developing Mobile apps.
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