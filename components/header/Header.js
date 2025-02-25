import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { connect } from "react-redux";

// Import assets
import Logo from '/public/images/logo.png';

// Import components
import MobileMenu from '../MobileMenu/MobileMenu';

// Menu Configuration
const MENU_CONFIG = {
  mainMenu: [
    {
      id: 1,
      title: "Accueil",
      href: "/",
    },
    {
      id: 2,
      title: "Qui sommes nous",
      href: "/about",
    },
    {
      id: 3,
      title: "Produits et Services",
      href: "/boutique",
      subMenu: [
        { id: 31, title: "Produits", href: "/boutique" },
        { id: 32, title: "Assemblage et Production", href: "/assemblage-et-production" },
        { id: 33, title: "Services Aprés-Vente", href: "/services-apres-vente" },
        { id: 34, title: "Consultance en Approvisionnement", href: "/consultance-en-approvisionnement" },
      ]
    },
    {
      id: 4,
      title: "Mon Devis",
      href: "/devis",
    },
    {
      id: 5,
      title: "Nous Contacter",
      href: "/contact",
    },
  ]
};

// Recursive Menu Rendering Component
const MenuRenderer = ({ items, depth = 0 }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return items.map((item, index) => (
    <li 
      key={index} 
      className={item.subMenu ? "has-submenu" : ""}
    >
      <Link 
        href={item.href} 
        onClick={scrollToTop}
      >
        {item.title}
      </Link>
      
      {item.subMenu && (
        <ul className="sub-menu">
          <MenuRenderer items={item.subMenu} depth={depth + 1} />
        </ul>
      )}
    </li>
  ));
};

const Header = (props) => {

  return (
    <header className="header-area header-style-3">
      {/* Top sections remain the same as previous implementation */}
      <div id="header-sticky" className="menu-area">
        <div className="container-fluid">
          <div className="second-menu">
            <div className="row align-items-center">
              {/* Logo Section */}
              <div className="col-xl-3 col-lg-3 col-md-7 col-sm-5 col-6">
                <div className="navbar-header d-flex align-items-center">
                  <Link href="/" className="navbar-brand d-flex align-items-center">
                    <Image src={Logo} alt="KOBARAX MEDICAL Logo" width={50} height={50} />
                    <span className="ms-2 company-name">KOBARAX MEDICAL</span>
                  </Link>
                </div>
              </div>

              {/* Main Navigation Menu */}
              <div className="col-xl-7 col-lg-6 col-md-1 col-1 text-right text-xl-right d-lg-block d-none">
                <nav className="main-menu">
                  <ul className="nav">
                    <MenuRenderer items={MENU_CONFIG.mainMenu} />
                  </ul>
                </nav>
              </div>

              {/* Contact Information */}
              <div className="col-xl-2 col-lg-3 col-md-4 col-5 text-left">
                <div className="header-area-right">
                  <div className="profile">
                    <a href="tel:328246486" className="flex items-center">
                      <i className="icon-contact"></i>
                      <span>
                        <small>{"Besoin d'aide? Contactez-nous:"}</small>
                        <span>(+221) 32-824-64-86</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="col-1">
                <MobileMenu menu={MENU_CONFIG.mainMenu}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  carts: state.cartList.cart,
  wish: state.wishList.w_list,
});

export default connect(mapStateToProps)(Header);