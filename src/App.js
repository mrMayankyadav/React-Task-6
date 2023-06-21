import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import { Nav } from './Components/Nav';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import {HashRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div >
      <HashRouter>
        <Routes>
          <Route path="/React-Task-6" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
