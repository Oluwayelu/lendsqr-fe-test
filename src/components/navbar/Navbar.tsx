import { FC, useContext } from "react";

import { DUMMY } from "routes";
import { AppContext } from "context";
import { bell, dropdown, logo, menu, search, userProfile } from "assets";

const Navbar: FC = () => {
  const { toggle } = useContext(AppContext);
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo" src={logo} alt="lendsqr-logo" />

        <button className="icon" onClick={toggle}>
          <img src={menu} alt="menu" className="icon-lg" />
        </button>
      </div>

      <div className="navbar-content">
        <div className="search-bar">
          <input type="text" placeholder="Search for anything" />
          <button className="search-icon">
            <img src={search} alt="search-icon" className="icon" />
          </button>
        </div>

        <div className="navbar-actions">
          <a href={DUMMY}>Docs</a>
          <div className="logged-in-user">
            <img src={bell} alt="notifications" className="icon-lg" />
            <img src={userProfile} className="user-image" alt="user-img" />
            <p className="name">Adedeji</p>
            <img src={dropdown} className="icon" alt="dropdown" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
