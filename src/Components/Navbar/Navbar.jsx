import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">    
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <span className="imgSmall"><img src="/images/imgSmall.webp" alt="Logo" /></span>
    
  <div class="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <div className="flexNav">
           <li className="nav-item">
          <a className="nav-link" href="#servicios">servicios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#clientes">clientes</a>
        </li>
        </div>
          <a className="nav-link" href="#"><img className="versaNav" src="/images/logoNav.png" alt="Logo"/></a>
        <div className="flexNav">
            <li className="nav-item">
          <a className="nav-link" href="#nosotros">nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link contact" href="#contacto">contacto</a>
        </li>
        </div>
      </ul>
    </div>
  </div>
</nav>
    </div>

  )
}

export default Navbar