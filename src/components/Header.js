import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">MovieFlex</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Watch List</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>


            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <button type="button" class="btn btn-primary"><Link to="/add">Search Movies</Link></button>
          </ul>
        </div>
      </div>
    </header>
  );
};
