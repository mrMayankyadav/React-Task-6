import {Nav} from './Nav.js'
import task1 from './task1.png'
import task2 from './task2.png'
import task3 from './task3.png'
import task4 from './task4.png'
import task5 from './task5.png'

export function Projects() {
    return (
      <div className="proj-page">
        <Nav/>

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
        </div>
  
        <div className="row p-5 mx-auto">
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
    );
  }
  