import React from 'react';
import * as IoIcons from 'react-icons/io5';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';
import * as GrIcons from 'react-icons/gr';
import './Navbar.css';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Markets',
    path: '/Markets',
    icon: <IoIcons.IoStatsChartSharp />,
    cName: 'nav-text',
  },
  {
    title: 'Node',
    path: '/nodes',
    icon: <SiIcons.SiNodered />,
    cName: 'nav-text',
  },
  {
    title: 'Stacking',
    path: '/Stacking',
    icon: <GrIcons.GrStackOverflow />,
    cName: 'nav-text',
  },
];
