import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  
  return(
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
  <div class="container">
    <a class="navbar-brand fw-bold fs-4" href="#">DH2P SPORT COMPANY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Product</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
          </li>
      </ul>
      <div className="buttons">
  <form className="d-flex" role="search">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-light" type="submit">Search</button>
  </form>
  <a href="" className="btn btn-outline-light" style={{ fontSize: '16px' }}>Login <i className="fa fa-sign-in me-1"></i></a>
  <a href="" className="btn btn-outline-light ms-2" style={{ fontSize: '16px' }}>Register <i className="fa fa-user-plus me-1"></i></a>
  <a href="" className="btn btn-outline-light ms-2" style={{ fontSize: '16px' }}>Cart <i className="fa fa-shopping-cart me-1"></i></a>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;