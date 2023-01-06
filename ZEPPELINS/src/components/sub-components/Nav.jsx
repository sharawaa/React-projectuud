import "../../Style/nav.css";

export default function Nav() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
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
              style={{ display: "flex", alignContent: "space-around" }}
            >
              <ul className="navbar-nav" style={{}}>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#1">
                    All
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#1">
                    UI Design
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#1">
                    Product Dessign
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#1">
                    Articles
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#1">
                    Tutorials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#1">
                    News
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
