import React from "react";
import styles from './Pages.module.scss'
import { BackLine } from "../Dec_el/BackLine";
import { SNEAKERS_LIST } from "../Store/STORESHAKES";

function News() {
  return (
    <div className={styles.background_grey}>
      <BackLine>
      </BackLine>
      <div className={styles.news_container}>
        <div className={styles.left_content}>
          <h1>modern stylish shades:</h1>
          <ul>
            {SNEAKERS_LIST.map((item) => (
              <li key={item.id}>
                <img src={item.link} alt="" />
                <svg xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 122 122" fill="none">
                  <circle cx="61" cy="61" r="61" fill="#D8D8D8" fill-opacity="0.5"/>
                </svg>                              
                <p key={item.id}>
                  {item.text.split('\n').map((line, index) => {
                    if (index === 0) {
                      return (
                        <span key={index} style={{
                          color: '#000',
                          fontFamily: 'Montserrat',
                          fontSize: '30.488px',
                          fontStyle: 'normal',
                          fontWeight: '500',
                          lineHeight: 'normal',
                        }}>
                          {line}<br />
                        </span>
                      );
                    } else {
                      return (
                        <span key={index} style={{
                          color: '#383838',
                          fontFamily: 'Montserrat',
                          fontSize: '25px',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          lineHeight: 'normal',
                        }}>
                          {line}<br />
                        </span>
                      );
                    }
                  })}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.right_content}>
          <div className={styles.sneakers_up}>
                  a
          </div>
          <div className={styles.sneakers_down}>
                  a
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
