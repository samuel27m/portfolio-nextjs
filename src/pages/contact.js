export default function Contact() {
    return (
        <div className="contact">
            <h1 className="text-center contact-text">Let's work together!</h1>
            <h6 className="contact-subtext">
                We all know how it goes. You have an amazing idea but you can't seem to find the right person to execute it.
                <br/> <br/> 
                Get in touch with me and share your thoughts! Maybe I'm not the right fit too, but I'm pretty sure I will be. 
                <br/> <br/>
                <u>You'll never know if you don't try to reach out to me </u>😉
            </h6>
            <form action="https://formspree.io/samuel.moreira.work@gmail.com" method="POST" autoComplete="off">
                <div className="form-group">
                    <input className="form-control" type="text" name="name" required placeholder="Your name" />
                </div>
                <div className="form-group">
                    <input className="form-control" type="email" name="email" required placeholder="Your email" />
                </div>
                <p className="text-center contact-subtext">Or if you prefer you can get in touch via email <a href="mailto:samuel.moreira.work@gmail.com">samuel.moreira.work@gmail.com</a></p>
                <div class="text-center">
                    <button type="submit" className="btn center-block button">
                        <span>Get in touch</span>
                    </button>
                </div>
            </form>
        </div>
    )
}