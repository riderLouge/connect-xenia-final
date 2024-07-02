// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image";
import connectxeniaLogo from "../../assets/ConnectXenia Final Files/Connectxenia-final-logo-png.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar" id='home'>
        <div className="navbar-container">
            <div className="relative w-1/6 h-14 mt-4">
                <Image src={connectxeniaLogo} alt="ConnectXenia Logo" layout="fill" objectFit="contain" style={{backgroundColor:"white", borderRadius:"10px",padding:"5px"}}/>
            </div>
            <div className="menu-icon md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <CloseIcon className="text-white text-2xl" />
          ) : (
            <MenuIcon className="text-white text-2xl" />
          )}
        </div>
          <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link href="#home" passHref legacyBehavior>
                <a className="nav-links">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#features" passHref legacyBehavior>
                <a className="nav-links">Our Features</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contact" passHref legacyBehavior>
                <a className="nav-links">Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        .navbar {
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.2rem;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          height: 80px;
          z-index: 1;
          width: 100%;
          max-width: 1500px;
        }

        .navbar-logo {
          color: #fff;
          justify-self: start;
          cursor: pointer;
          text-decoration: none;
          font-size: 2rem;
          display: flex;
          align-items: center;
        }

        .menu-icon {
          display: none;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          list-style: none;
          text-align: center;
        }

        .nav-item {
          height: 80px;
        }

        .nav-links {
          color: #fff;
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 0.5rem 1rem;
          height: 100%;
        }

        .nav-links:hover {
          color: #ed6b52;
          text-decoration: none;
        }

        @media screen and (max-width: 960px) {
          .NavbarItems {
            position: relative;
          }

          .menu-icon {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 60%);
            font-size: 1.8rem;
            cursor: pointer;
          }

          .nav-menu {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 90vh;
            position: absolute;
            top: 80px;
            left: -100%;
            opacity: 1;
            transition: all 0.5s ease;
            background: #333;
          }

          .nav-menu.active {
            background: #333;
            left: 0;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 1;
          }

          .nav-item {
            width: 100%;
          }

          .nav-links {
            text-align: center;
            padding: 2rem;
            width: 100%;
            display: table;
          }

          .nav-links:hover {
            background-color: #fff;
            color: #333;
            border-radius: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
