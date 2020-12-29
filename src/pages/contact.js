export default function Contact() {
    return (
        <div className="contact">
            <h1 className="text-center contact-text">Let's work together!</h1>
            <h6 className="contact-subtext">
                We all know how it goes. You have an amazing idea but you can't seem to find the right person to execute it.
                <br/> <br/> 
                Fill the form to get in touch with me! 
                <br/> <br/> 
                Or if you prefer you can get in touch via email <a href="mailto:me@samuelcacador.com">me@samuelcacador.com</a> and share your thoughts!
            </h6>
            <form action="https://formspree.io/me@samuelcacador.com" method="POST" autoComplete="off">
                <div className="form-group">
                    <input className="form-control" type="text" name="name" required placeholder="Your name" />
                </div>
                <div className="form-group">
                    <input className="form-control" type="email" name="email" required placeholder="Your email" />
                </div>
                <div class="text-center">
                    <button type="submit" className="btn center-block button">
                        <span>Submit</span>
                    </button>
                </div>
            </form>
        </div>
    )
}