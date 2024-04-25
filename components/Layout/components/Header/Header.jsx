import React from "react";
import Link from "next/link";

import TopBar from "../TopBar/TopBar";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItemsCount = useSelector((state) => state.cart.length);
  return (
    <>
      <TopBar />
      <header className="main-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-menu"
                aria-controls="navbars-rs-food"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="/">
                <img src="images/logos/02.png" className="logo" alt="" width={100} height={80}/>
              </a>
            </div>

            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul
                className="nav navbar-nav ml-auto"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                {/* <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">Inicio</a>
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link">Nosotros</a>
                  </Link>
                </li>
                {/* <li className="dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle arrow"
                    data-toggle="dropdown"
                  >
                    SHOP
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/cart">
                        <a>Cart</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/checkout">
                        <a>Checkout</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/my-account">
                        <a>My Account</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/wishlist">
                        <a>Wishlist</a>
                      </Link>
                    </li>
                    <li>
                      <a href="shop-detail.html">Shop Detail</a>
                    </li>
                  </ul>
                </li> */}
                <li className="nav-item">
                  <Link href="/our-services">
                    <a className="nav-link">Servicios</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact-us">
                    <a className="nav-link">Contacto</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/complaints">
                    <a className="nav-link">Quejas y sugerencias</a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* <div className="attr-nav">
              <ul>
                <li className="side-menu">
                  <Link href="/cart">
                    <a>
                      <i className="fa fa-shopping-bag"></i>
                      <span className="badge">{cartItemsCount}</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </nav>
      </header>
    </>
  );
}
