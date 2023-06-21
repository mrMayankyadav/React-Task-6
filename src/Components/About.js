import {Nav} from './Nav.js'
export function About()
{
    return(
        <div className="About-me-page">
            <Nav/>
            <div className="row d-flex justify-content-center about-me-container">
                <div className="col-8 p-5 shadow-lg about-me-box">
                    <p>Hello, I am Mayank Yadav here. Currently, I 
                        am pursuing my Bachelor in Technology in Computer Science
                        and Technology. Web development is an area that 
                        has just piqued my interest, but I have always had a strong 
                        interest in programming.
                    </p>
                    <p>
                    I've only recently begun to study the MERN stack, and I'm 
                    continually adding new experiences every day. Aside from that, 
                    C++ is my got-to programming language.
                    </p>
                    <p>
                    I am an indivisual who is dedicated and optimistic. I'd like to 
                    collaborate with folks who are on the same wavelength as myself.  
                    </p>
                    <div className="p-1 d-flex justify-content-center">
                        <div className="row">
                            <div className="col">
                            <button className="btn">Contacts</button>
                            </div>
                            <div className="col">
                            <button className="btn">Projects</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}