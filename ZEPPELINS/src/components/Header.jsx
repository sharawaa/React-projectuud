export default function Header() {
  return (
    <div className="bg-light">
      <nav className="navbar navbar-expand-lg container ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#1">
            <div className="d-flex">
              <img src="./Leap.png" alt="sssss" />
              <img src="./Hire Me.png" alt="" />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
            style={{ flexGrow: 0 }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#1">
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#1">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#1">
                  CV
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#1">
                  STORE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#1">
                  FREELANCE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#1">
                  ABOUT ME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#1">
                  CONTACT
                </a>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
