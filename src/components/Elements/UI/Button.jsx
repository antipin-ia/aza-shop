import React from 'react';
import { NavLink } from 'react-router-dom'; 
import styles from './Button.module.scss';

const Button = () => {

  return (
    <button className={styles.button} onClick= {() => { alert('clicked') }} >
       <NavLink to="/">LEARN MORE</NavLink>
    </button>
  );
};

export default Button;
