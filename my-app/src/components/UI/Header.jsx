import React, { useEffect, useRef } from "react";
import "../../styles/Header.css";
import logo from "../../assets/img/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/userRedux";

const nav__links = [
  {
    path: "/",
    display: "Acceuil",
  },
  {
    path: "#Les_événements",
    display: "Les événements",
  },
  {
    path: "#Abonnements",
    display: "Abonnements",
  },
  {
    path: "#Contact Us",
    display: "Contact Us",
  },
];

const Header = () => {
  const isAuthenticated = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const headerRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };
  const handleLogout=()=>{
    dispatch(logout())
    localStorage.clear()
    navigate('/')

  }

  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/* ======== LOGO ===== */}
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <h2>JAM3ITI</h2>
          </div>

          {/*====== navigation menu ========*/}
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item) => (
                <li className="nav__item" key={item.path}>
                  <NavLink to={item.path}>

                  <a onClick={handleClick} href={item.path}> 
                  
                  </a> 
                  
                    {item.display}
                  
                  </NavLink>
                  
                   
                </li>
              ))}
            </ul>
          </div>
          {/*==========nav right =============*/}
          {!isAuthenticated && (
            <div className="nav__right">
              <NavLink to="/register">
                <button className="register__btn">Register</button>
              </NavLink>
              <NavLink to="/login">
                <button className="signin__btn">Sign in</button>
              </NavLink>
            </div>
          )}
          {isAuthenticated && (
            <div className="nav__right">
              
                <button className="register__btn" onClick={handleLogout}>Logout</button>
             
            </div>
          )}

          <NavLink to="/cart">
            <div className="nav__shop">
              <i className="ri-shopping-cart-2-line"></i>
              <span className="badge">{quantity}</span>
            </div>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
