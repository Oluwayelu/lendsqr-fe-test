import { FC, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { sidebar } from "routes";
import { AppContext } from "context";
import { dropdown_outlined } from "assets";

const Sidebar: FC = () => {
  const { pathname } = useLocation();
  const { showSidebar, toggle } = useContext(AppContext);

  return (
    <div className={showSidebar ? `sidebar open` : `sidebar `}>
      <div className="sidebar-content">
        {sidebar.map(({ icon, title, dropdown, link, routes }, index) =>
          dropdown ? (
            <div key={index} className="list-item">
              {icon && (
                <div>
                  <img src={icon} alt={title} className="icon" />
                </div>
              )}
              <div className="title">
                <p>{title}</p>
                {dropdown && (
                  <img
                    src={dropdown_outlined}
                    alt="dropdown"
                    className="icon"
                  />
                )}
              </div>
            </div>
          ) : (
            <div key={index}>
              <Link
                onClick={toggle}
                to={link ? link : "#"}
                className={pathname === link ? "list-item active" : "list-item"}
              >
                {icon && (
                  <div>
                    <img src={icon} alt={title} className="icon" />
                  </div>
                )}
                <p>{title}</p>
              </Link>
              {routes?.map(({ link, title, icon }, index) => (
                <Link
                  key={index}
                  onClick={toggle}
                  to={link}
                  className={
                    pathname === link ? "list-item active" : "list-item"
                  }
                >
                  <div>
                    <img src={icon} alt={title} className="icon" />
                  </div>
                  <p>{title}</p>
                </Link>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;
