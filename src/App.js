import {Nav} from './Nav.js'
import TypeWriterEffect from 'react-typewriter-effect';
import profile_pic from './profile_pic.jpg';
import task1 from './task1.png'
import task2 from './task2.png'
import task3 from './task3.png'
import task4 from './task4.png'
import task5 from './task5.png'

export function Home() 
{
  return (
    <div>
      <Nav/>
      <div className="home">
        <div id="body">
            <div className="row p-5">

              <div className="col-2 text-center">
                  <a href="https://github.com/mrMayankyadav" alt="github" className="social-media-links"><i className="bi bi-github "></i></a>
                  <a href="https://www.linkedin.com/in/mayank-yadav-0589051b8/" alt="Linkedin" className="social-media-links"><i className="bi bi-linkedin"></i></a>
                  <a href="https://instagram.com/_m_a_y_a_n_k_ys?igshid=MzNlNGNkZWQ4Mg==" alt="instagram" className="social-media-links"><i className="bi bi-instagram"></i></a>
              </div>

              <div className="col-9 d-flex justify-content-center" id="home-main">
                <div>
                  <h1 className="fw-bold"> <small>Hi there, <br/> WELCOME TO MY PORTFOLIO! </small> <br/><br/>
                  <big>I am</big> 
                  <span id="name"> Mayank Yadav</span></h1>
                  <h3>
                      I am a
                      <TypeWriterEffect 
                          textStyle={{fontSize: "1em", color: "#00abf0"}}
                          multiText={[
                              'Developer',
                              'Programmer'
                          ]}
                          multiTextLoop
                          >
                      </TypeWriterEffect>
                  </h3>
                </div>

                <div className="col-1 d-flex justify-content-center home-pic">
                  <div className="glowing-circle">
                    <div className="pic-box">
                      <img src={profile_pic} alt="profile-pic" className="pic"></img>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <br/>
          </div>
          <br/>
            <div class="fade_rule"></div> 
        </div>

        <div className="About-me-page" id="About-me-page">
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
                </div>
            </div>
            <br/>
            <div class="fade_rule"></div> 
        </div>

        
          <div className="proj-page" id="projects-page">
          <div className="row p-5 mx-auto">
            <div className="col d-flex justify-content-center">
              <div className="card shadow-lg" style={{ width: '18rem' }}>
                <img src={task1} className="card-img-top" alt="Task-1" style={{height: "230px"}}/>
                <div className="card-body">
                  <h5 className="card-title">Responsive paragraph word counter - Task-1</h5>
                  <a href="https://mrmayankyadav.github.io/React-Task-1/" target="__blank" className="btn">
                    Open Project
                  </a>
                </div>
              </div>
            </div>
    
            <div className="col d-flex justify-content-center">
              <div className="card shadow-lg" style={{ width: '18rem' }}>
                <img src={task2} className="card-img-top" alt="..." style={{height: "250px"}}/>
                <div className="card-body">
                  <h5 className="card-title">Calculator - Task-2</h5>
                  <a href="https://mrmayankyadav.github.io/React-Task-2/" className="btn" target="__blank">
                  Open Project
                  </a>
                </div>
              </div>
            </div>
          </div>
    
          <div className="row p-5 mx-auto">
            <div className="col d-flex justify-content-center">
              <div className="card shadow-lg" style={{ width: '18rem' }}>
                <img src={task3} className="card-img-top" alt="..." style={{height: "250px"}}/>
                <div className="card-body">
                  <h5 className="card-title">Color Picker - Task-3</h5>
                  <a href="https://mrmayankyadav.github.io/React-Task-3/" className="btn" target="__blank">
                  Open Project
                  </a>
                </div>
              </div>
            </div>

            <div className="col d-flex justify-content-center">
              <div className="card shadow-lg" style={{ width: '18rem' }}>
                <img src={task4} className="card-img-top" alt="..." style={{height: "250px"}}/>
                <div className="card-body">
                  <h5 className="card-title">Fetch Records - Task-4</h5>
                  <a href="https://mrmayankyadav.github.io/React-Task-4/" className="btn" target="__blank">
                  Open Project
                  </a>
                </div>
              </div>
            </div>
    
            <div className="col d-flex justify-content-center">
              <div className="card shadow-lg" style={{ width: '18rem' }}>
                <img src={task5} className="card-img-top" alt="..." style={{height: "250px"}}/>
                <div className="card-body">
                  <h5 className="card-title">Age Calculator - Task-5</h5>
                  <a href="https://mrmayankyadav.github.io/React-Task-5/" className="btn " target="__blank">
                  Open Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fade_rule"></div> 

        <div className="d-flex justify-content-center p-5" id="contact-page">
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
  );
}
