import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/Textutils-React/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Textutils-React/">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className={`nav-link text-${props.mode === "light" ? "dark":"light"}`} href="/about">
                  {props.aboutTitle}
                </a>
              </li> */}
            </ul>
              <div className={`form-check form-switch text-${props.mode === "light" ? "dark":"light"}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} style={{backgroundColor:props.mode === "light" ? "#212529":"#f8f9fa"}}/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.toggleText}</label>
              </div>
          </div>
        </div>
      </nav>
    </>
  );
}


Navbar.propTypes = {
  title: PropTypes.string,
  aboutTitle: PropTypes.string
}

Navbar.defaultProps = {
  title: "Default title",
  aboutTitle: "Default about"
}