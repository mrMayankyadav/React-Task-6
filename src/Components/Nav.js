export function Nav() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg" id="navbar">
          <div className="container-fluid">
            <a className="navbar-brand ps-5" href="/React-Task-6">Portfolio.</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link pe-4" href="/React-Task-6">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pe-4" href="#About-me-page">About me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pe-4" href="#projects-page">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pe-5" href="#contact-page">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
