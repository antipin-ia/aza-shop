import React from 'react';
import { NavLink ,Outlet } from 'react-router-dom';
import styles from './Header.module.scss';
import Basket from '../../../img/elements/icons/Basket.svg';
import Profile from '../../../img/elements/icons/Profile.svg';


const setActive = ({isActive}) => ({color: isActive ? 'red' : 'white'});
const Header = () => {
    return (
    <>
      <div className={styles.header}>
        <div className={styles.menu}>
          <NavLink to="/" className={styles.menuItem  } style={setActive} >Home</NavLink>
          <NavLink to="/news" className={styles.menuItem } style={setActive}  >News!</NavLink>
        </div>
        <div className={styles.icons}>
        <img src={Basket} className={styles.icon1} alt="icon1" />
        <img src={Profile} className={styles.icon2} alt="icon2" />
        </div>
      </div>
      <Outlet/>
    </>  
    );
  };

export default Header;




