
import React from 'react';
import styles from '../Pages/Pages.module.scss'

const SvgComponent = ({ number }) => (
  <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
    <circle cx="33.1603" cy="33.3334" r="33.1603" fill="white" fillOpacity="0.7"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#000" font-family="Montserrat" font-size="27.6px" font-style="normal" font-weight="bold" line-height="normal" text-transform = 'uppercase'>{number}</text>
  </svg>
);

export default SvgComponent;