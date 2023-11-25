import React from "react";
import styles from './Pages.module.scss'
import SvgComponent from "../Text/SvgComponent";
import { BackLine } from "../Dec_el/BackLine";
import { SNEAKERS_LIST } from "../Store/STORESHAKES";
import sneaker from '../../../img/elements/img/sneakers.png';

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
                <div className={styles.news_circle}></div>
                <img src={sneaker} alt="" />
          </div>
          <div className={styles.sneakers_down}>
                  <div className={styles.sneakers_down_content}>
                    <div className={styles.priceline}>
                      <div className={styles.priceline_icons}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <circle cx="17" cy="17" r="17" fill="white"/>
                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#000" font-family="Montserrat" font-size="17.6px" font-style="normal" font-weight="500" line-height="normal">
                              2D
                            </text>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                          <circle cx="17" cy="17" r="17" fill="white"/>
                          <path d="M15.3453 7.28768C16.3438 6.82683 17.4941 6.82683 18.4925 7.28768L25.4952 10.5197C25.7612 10.6424 25.9316 10.9086 25.9316 11.2016V13.9958H27.4337V11.2016C27.4337 10.3227 26.9226 9.5241 26.1247 9.15582L19.1221 5.92383C17.7242 5.27865 16.1137 5.27865 14.7158 5.92383L7.71315 9.15582C6.9152 9.5241 6.4042 10.3227 6.4042 11.2016V13.9958H7.90631V11.2016C7.90631 10.9086 8.07665 10.6424 8.34262 10.5197L15.3453 7.28768Z" fill="black"/>
                          <path d="M7.00312 18.5021C7.27658 18.7273 7.5775 18.9467 7.90631 19.1591C7.98323 19.2088 8.06168 19.2581 8.14167 19.3069C10.3158 20.6357 13.4149 21.5063 16.9177 21.5063C20.4205 21.5063 23.5196 20.6357 25.6938 19.3069C25.7746 19.2577 25.8539 19.2078 25.9316 19.1576C26.2595 18.9457 26.5596 18.7267 26.8324 18.5021C27.0502 18.3228 27.2504 18.1399 27.4337 17.9543C27.741 17.6429 28 17.3236 28.2116 17H25.9319C25.5171 16.9999 25.1808 16.6637 25.1808 16.249C25.1808 15.8342 25.517 15.4979 25.9319 15.4979H29.6871C29.8863 15.4979 30.0772 15.577 30.2181 15.7179C30.359 15.8587 30.4382 16.0498 30.4382 16.249V20.0042C30.4382 20.4189 30.1018 20.7553 29.6871 20.7553C29.2722 20.7553 28.9361 20.4189 28.9361 20.0042V18.5338C28.5129 19.0342 28.0085 19.5049 27.4337 19.9392C27.1335 20.1658 26.8142 20.3827 26.4771 20.5887C26.3 20.6968 26.1181 20.8021 25.9316 20.9041C23.5396 22.2128 20.3807 23.0084 16.9177 23.0084C13.4559 23.0084 10.2979 22.2132 7.90631 20.9055C7.71889 20.803 7.53617 20.6973 7.3584 20.5887C7.0222 20.3832 6.70365 20.167 6.4042 19.941C5.82948 19.507 5.32524 19.0369 4.9021 18.537V20.0042C4.9021 20.4189 4.56584 20.7553 4.15105 20.7553C3.73625 20.7553 3.39999 20.4189 3.39999 20.0042V16.249C3.39999 16.0498 3.47912 15.8587 3.61998 15.7179C3.76081 15.577 3.95185 15.4979 4.15105 15.4979H7.90631C8.3211 15.4979 8.65736 15.8342 8.65736 16.249C8.65736 16.6637 8.3211 17 7.90631 17H5.62392C5.83612 17.3245 6.09587 17.6446 6.4042 17.9567C6.58674 18.1416 6.78629 18.3237 7.00312 18.5021Z" fill="black"/>
                          <path d="M7.90631 22.594V22.7983C7.90631 23.0913 8.07665 23.3575 8.34262 23.4802L15.3453 26.7123C16.3438 27.1732 17.4941 27.1732 18.4925 26.7122L25.4952 23.4802C25.7612 23.3575 25.9316 23.0913 25.9316 22.7983V22.5928C26.4589 22.3389 26.9608 22.0621 27.4337 21.7638V22.7983C27.4337 23.6772 26.9226 24.4758 26.1247 24.8441L19.1221 28.0761C17.7242 28.7212 16.1137 28.7212 14.7158 28.0761L7.71315 24.8441C6.9152 24.4758 6.4042 23.6772 6.4042 22.7983V21.7653C6.87702 22.0636 7.37896 22.3403 7.90631 22.594Z" fill="black"/>
                          <path d="M10.9711 12.1979C11.1345 11.8166 11.576 11.64 11.9572 11.8034L16.9188 13.9298L21.8802 11.8034C22.2615 11.64 22.7031 11.8166 22.8665 12.1979C23.0298 12.5792 22.8533 13.0207 22.4719 13.1841L17.6698 15.2421V18.5022C17.6698 18.9169 17.3335 19.2532 16.9188 19.2532C16.504 19.2532 16.1677 18.9169 16.1677 18.5022V15.2421L11.3655 13.1841C10.9843 13.0207 10.8077 12.5792 10.9711 12.1979Z" fill="black"/>
                        </svg>
                      </div>
                      <div>
                        <p className={styles.white_text}>149$</p>
                      </div>
                    </div>
                    <p className={styles.adidas_text}>adidas <span>ozweego</span></p>
                    <div className={styles.sizeline}>
                     {[36, 37, 38, 39, 40, 41].map(number => <SvgComponent number={number} key={number} />)}
                    </div>
                    <div className={styles.btn_cards}>
                      <button className={styles.btn}> <p>ADD <br /> TO CARD</p></button>
                      <button className={styles.btn}> <p>BUY <br /> NOW!</p></button>
                    </div>
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
