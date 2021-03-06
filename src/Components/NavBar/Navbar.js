import React from "react";
import "./Navbarstyle.css";
import { Link, useHistory, useLocation } from "react-router-dom";

// Navbar Component Which Shows Cryptocurrencies Portfolio Watchlist, Currency(USD EUR GHS) And Login And SignUp 

const Navbar = ({
  currentcurrency,
  changecurrency,
  changeloggedin,
  changeauthtoken,
}) => {
  let location = useLocation();
  let history = useHistory();

  const handlesetcurrency1 = () => {
    changecurrency("usd");
  };
  const handlesetcurrency2 = () => {
    changecurrency("eur");
  };

  const handlesetcurrency3 = () => {
    changecurrency("ghs");
  };

  const handleLogout = async () => {
    localStorage.clear();
    await history.push("/");
    changeloggedin("false");
    changeauthtoken(" ");
  };

  return (
    <>
      <div className="header">
        <nav
          className="navbar navbar-expand-lg navbar-light  bg-white"
          style={{ height: "52px" }}
        >
          <div
            className="container-fluid"
            style={{
              backgroundColor: "#ffffff",
              borderBottom: "1px solid #eaeaea",
            }}
          >
            <img
              className="main-logo mx-4 navbar-brand"
              src="https://img.favpng.com/13/20/21/cryptocurrency-wallet-bitcoin-litecoin-electrum-feathercoin-png-favpng-NKMyZmKAu5fec3FTJWhEx4b4H_t.jpg"
              alt="Logo"
              style={{ width: "42px", height: "49px" }}
            />
            <Link className="navbar-brand" to="/">
              {" "}
              <b>CryptoMart</b>
            </Link>

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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active hover-underline-animation"
                    aria-current="page"
                    to="/"
                  >
                    {" "}
                    <b>CryptoCurrencies</b>{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/Portfolio"
                        ? "active hover-underline-animation"
                        : "hover-underline-animation"
                    }`}
                    to="/Portfolio"
                  >
                    {" "}
                    <b>Portfolio</b>{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/Watchlist"
                        ? "active hover-underline-animation"
                        : "hover-underline-animation"
                    }`}
                    to="/Watchlist"
                  >
                    {" "}
                    <b>Watchlist</b>{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link hover-underline-animation" to="/Aboutme"> <b>About Me</b> </Link> */}
                </li>
              </ul>
              <div className="navbar-text d-flex justify-content-between">
                <div className="change-currency">
                  <button
                    type="button"
                    onClick={handlesetcurrency1}
                    className={
                      currentcurrency === "usd"
                        ? "dark-grey btn-outline-secondary"
                        : "light-grey btn-outline-secondary"
                    }
                  >
                    USD
                  </button>
                  <button
                    type="button"
                    onClick={handlesetcurrency2}
                    className={
                      currentcurrency === "eur"
                        ? "dark-grey btn-outline-secondary"
                        : "light-grey btn-outline-secondary"
                    }
                  >
                    EUR
                  </button>
                  <button
                    type="button"
                    onClick={handlesetcurrency3}
                    className={
                      currentcurrency === "ghs"
                        ? "dark-grey btn-outline-secondary"
                        : "light-grey btn-outline-secondary"
                    }
                  >
                    GHS
                  </button>
                </div>
                {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <i
                      className="fas fa-bell mx-3 my-1"
                      style={{ paddingTop: "8px", borderRadius: "8px" }}
                    ></i>
                  </li>
                </ul> */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/UserDetails">
                      <i
                        className={
                          !localStorage.getItem("token")
                            ? "d-none"
                            : "fa fa-user-circle-o"
                        }
                        style={{
                          fontSize: "24px",
                          marginTop: "10px",
                          marginRight: "10px",
                          cursor: "pointer",
                        }}
                      ></i>
                    </Link>
                  </li>
                </ul>

                <Link to="/Login" style={{ marginRight: "10px" }}>
                  <button
                    type="button"
                    className={
                      localStorage.getItem("token")
                        ? "d-none"
                        : "btn-login btn btn-primary"
                    }
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Login
                  </button>
                </Link>
                <Link to="/SignUp">
                  <button
                    type="button"
                    className={
                      localStorage.getItem("token")
                        ? "d-none"
                        : "btn-login  btn btn-primary"
                    }
                  >
                    Sign Up
                  </button>{" "}
                </Link>
                <button
                  type="button"
                  className={
                    !localStorage.getItem("token")
                      ? "d-none"
                      : "btn-login  btn btn-primary"
                  }
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
