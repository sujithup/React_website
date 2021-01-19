import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <>
        
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous">

        </script>

        {/* <div className = "container-fluid nav_bg">
          <div className = 'row'>
            <div className ='col-12 mx-auto'>
              
            </div>
          </div>
        </div>

         */}
  
  <nav className="navbar sticky-top navbar-expand-lg navbar-light">
  <NavLink className="navbar-brand text-white" to="/">Freelancer</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">

      <li className="nav-item active">   
        <NavLink className="nav-link text-white " to="/">Home <span className="sr-only">(current)</span>
        </NavLink>
      </li>

      <li className="nav-item active">
        <NavLink className="nav-link text-white " to="/explore">Explore </NavLink>
      </li>

      <li className="nav-item active">
        <NavLink className="nav-link text-white" to="/about">About </NavLink>
      </li>
      
      <li className="nav-item active">
        <NavLink className="nav-link text-white" to="/contact">Contact us </NavLink>
      </li>

      </ul>

      {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-4" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}

  </div>
</nav>
    </>       
    );
};

export default Navbar;