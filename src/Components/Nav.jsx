import React from "react";

import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <nav>
        <h3>LOGO</h3>
        <ul className="nav-links">
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/shop">
            <li>SHOP</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
