import {Nav} from './Nav.js';
export function Contact()
{
    return(
        <div>
            <Nav/>
            <div className="d-flex justify-content-center p-5">
                <div className="shadow-lg rounded text-center p-5 contact-container">
                    <h1 className="fw-bold">Contact Details:</h1>

                    <div className="rounded text-center contact-box shadow p-2">
                        <i class="bi bi-envelope"></i>
                        <h4>Email</h4>
                        <p>mayank.yadav2020a@vitstudent.ac.in</p>
                        <a href="mailto: mayank.yadav2020a@vitstudent.ac.in" className="contact-links">Send mail</a>
                    </div><br/>

                    <div className="rounded text-center contact-box shadow p-2">
                        <i class="bi bi-whatsapp"></i>
                        <h4>Whatsapp</h4>
                        <p>+91 8960671839</p>
                        <a href="http://api.whatsapp.com/send?phone=918960671839" className="contact-links">Chat</a>
                    </div>
                </div>
            </div>
        </div>
    )
}