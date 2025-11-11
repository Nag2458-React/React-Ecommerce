import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const navArray = [
    { navName: "Home", navPath: "/" },
    { navName: "About Us", navPath: "/About" },
    { navName: "Services", navPath: "/Services" },
    { navName: "Forms", navPath: "/forms" },
    { navName: "Products", navPath: "/products" },
    {
      navName: "Props",
      navPath: "/Dropdown",
      subMenu: [
        { subName: "Example1", subPath: "/Example1" },
        { subName: "Example2", subPath: "/Example2" },
      ],
    },
    {
      navName: "Form Handling",
      navPath: "/Dropdown",
      subMenu: [
        { subName: "Submit Form", subPath: "/form1" },
        { subName: "Edit & Delete", subPath: "/form2" },
      ],
    },
    {
      navName: "API",
      navPath: "/Dropdown",
      subMenu: [
        { subName: "Api1", subPath: "/Api1" },
        { subName: "Api2", subPath: "/Api2" },
      ],
    },
    { navName: "useContext", navPath: "/usecontext" },
    {
      navName: "UseReducer",
      navPath: "/reducer",
      subMenu: [
        { subName: "Reduser1", subPath: "/Reducer1" },
        { subName: "Reducer2", subPath: "/Reducer2" },
      ],
    },
  ];
  const logArray = [{ logName: "Login", logPath: "/Login" }];
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
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
        <div className="collapse navbar-collapse row" id="navbarNavDropdown">
          <div className="col-md-11">
            <ul className="navbar-nav">
              {navArray.map((value, index) => {
                return value.subMenu ? (
                  <>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {value.navName}
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        {value.subMenu.map((item, index1) => {
                          return (
                            <>
                              {" "}
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to={item.subPath}
                                >
                                  {item.subName}
                                </Link>
                              </li>{" "}
                            </>
                          );
                        })}
                      </ul>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to={value.navPath}
                      >
                        {value.navName}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="col-md-1" style={{ textAlign: "right" }}>
            {logArray.map((logs, logindex) => {
              return (
                <>
                  <Link className="logedin" to={logs.logPath}>
                    {logs.logName}
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
