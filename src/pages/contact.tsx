export default function Contact() {
    return (
        <div className="contact">
            <h1 className="text-center contact-text">Let&apos;s work together!</h1>
            <h6 className="contact-subtext">
                Fill the form to get in touch with me!
                <br/> <br/>
                Or if you prefer you can get in touch via email <a href="mailto:me@samuelcacador.com">me@samuelcacador.com</a> and share your thoughts!
            </h6>
            <form action="https://formspree.io/f/xvondvyl" method="POST" autoComplete="off">
                <div className="form-group">
                    <input className="form-control" type="text" name="name" required placeholder="Your name" />
                </div>
                <div className="form-group">
                    <input className="form-control" type="email" name="email" required placeholder="Your email" />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn center-block button">
                        <span>Submit</span>
                    </button>
                </div>
            </form>
        </div>
    )
}