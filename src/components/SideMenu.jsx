import React, { useEffect, useState } from "react";
import logo from "../assets/logo/rabbitcard-logo.png";
import inactive_logo from "../assets/logo/rabbitcard-logo.jpg";

import MenuItem from "./MenuItem";

/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    id:1,
    name: "Home",
    exact: true,
    to: "/",
    iconClassName: "bi bi-house",
  },
  {
    id:2,
    name: "Management",
    exact: true,
    to: `/management`,
    iconClassName: "bi bi-gear-wide-connected",
    subMenus: [
      { name: "project", to: "/management/project" },
      { name: "user", to: "/management/user" },
      { name: "permission", to: "/management/permission" },
      { name: "services", to: "/management/services" },
    ],
  },
  {
    id:3,
    name: "Project",
    exact: true,
    to: `/project`,
    iconClassName: "bi bi-list-task",
    subMenus: [
      { name: "project1", to: "/project/project1" },
      { name: "project2", to: "/project/project2" },
    ],
  },
  {
    id:4,
    name: "Configuration",
    exact: true,
    to: `/config`,
    iconClassName: "bi bi-gear",
    subMenus: [
      { name: "Config1", to: "/config/config1" },
      { name: "Config2", to: "/config/config2" },
    ],
  },
  
];


const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo" onClick={() => setInactive(!inactive)}>
          {inactive ? (
            <img src={inactive_logo} alt="rabbit-logo" className="logo1"/>
          ) : (
            <img src={logo} alt="rabbit-logo" className="logo2" />
          )}
          
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-list"></i>
          ) : (
            <i class="bi bi-list"></i>
          )}
        </div>
      </div>
      <div className="out-of-banner">
        <div className="search-controller">
          <button className="search-btn">
            <i class="bi bi-search"  style={{color: 'white'}}></i>
          </button>

          <input type="text" placeholder="  search..." />
        </div>

        <div className="divider"></div>

        <div className="main-menu">
          <ul>
            {menuItems.map((menuItem, index) => (
              <MenuItem
                key={index}
                name={menuItem.name}
                exact={menuItem.exact}
                to={menuItem.to}
                subMenus={menuItem.subMenus || []}
                iconClassName={menuItem.iconClassName}
                onClick={(e) => {
                  if (inactive) {
                    setInactive(false);
                  }
                }}
              />
            ))}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
