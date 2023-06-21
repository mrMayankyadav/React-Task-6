import {Nav} from './Nav.js'
import TypeWriterEffect from 'react-typewriter-effect';
import profile_pic from './profile_pic.jpg';

export function Home() 
{
  return (
    <div id="body">
      <Nav/>
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
      <div class="fade_rule"></div>  
    </div>
  );
}