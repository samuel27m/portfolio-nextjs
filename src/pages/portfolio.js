import Link from 'next/link'

export default function Portfolio() {

    /**
     * Returned a button with the provided link
     * @param string url - A valid URL
     */
    const getLinkedButton = (url) => {
        return (
            <a href={url} target="_blank" rel="noopener noreferrer">
                <button className="btn center-block box-button">
                    <span>See project</span>
                </button>
            </a>
        );
    }

    const cols = 'col-lg-6 col-md-6 mr-auto ml-auto';

    return (
        <div className="portfolio">
            <div className="row justify-content-center">
                <div className={cols}>
                    <div className="project-box">
                        <div className="box-title">
                            React TODO
                        </div>
                        <div className="box-description">
                            Simple to-do list using React.js
                        </div>
                        { getLinkedButton('https://react-todo.samuelcacador.com/') }
                    </div>
                </div>
                <div className={cols}>
                    <div className="project-box">
                        <div className="box-title">
                            Tindev
                        </div>
                        <div className="box-description">
                            Mobile app to match devs using React Native
                        </div>
                        { getLinkedButton('https://github.com/samuel27m/tindev-app') }
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className={cols}>
                    <div className="project-box">
                        <div className="box-title">
                            Instagram (Server)
                        </div>
                        <div className="box-description">
                            Clone of Instagram, backend using Node.js, MongoDB and Sockets
                        </div>
                        { getLinkedButton('https://github.com/samuel27m/instagram-server') }
                    </div>
                </div>
                <div className={cols}>
                    <div className="project-box">
                        <div className="box-title">
                            Instagram (Web)
                        </div>
                        <div className="box-description">
                            Clone of Instagram, frontend using React.js and Sockets
                        </div>
                        { getLinkedButton('https://github.com/samuel27m/instagram-web') }
                    </div>
                </div>
            </div>
            
            <div className="justify-content-center no-margin">
                <div className="col-lg-12 text-center">
                    <p>And this website, of course. <a href="https://github.com/samuel27m/portfolio-nextjs" target="_blank" rel="noopener noreferrer">Source code</a></p>
                </div>
            </div>

            <div class="button-wrapper">
                <Link href='/contact'>
                    <a>
                        <button className="btn center-block button">
                            <span>Contact</span>
                        </button>
                    </a>
                </Link>
            </div>
        </div>
        
    )
}