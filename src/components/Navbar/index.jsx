import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 2,
    color: '#fff',
    transition: 400,
  },
  navbar: {
    position: 'sticky',
    height: 60,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    top: 0,
    backgroundColor: '#1A2B3C',
    zIndex: 100,
  },
}));

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className={classes.navbar}>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars
              onClick={() => {
                showSidebar();
                setOpen(!open);
              }}
            />
          </Link>
          <div className='header-top'></div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul
            className='nav-menu-items'
            onClick={() => {
              showSidebar();
              setOpen(!open);
            }}
          >
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className='Menu-span'>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          className='overlay'
          onClick={() => {
            showSidebar();
            setOpen(!open);
          }}
        >
          <Backdrop className={classes.backdrop} open={open}></Backdrop>
        </div>
      </IconContext.Provider>
    </>
  );
}
