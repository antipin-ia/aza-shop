import React from "react";

import sneakers from '../../../img/elements/img/sneakers.png'

import styles from './Pages.module.scss'
import '../../../index.scss'


function Home() {
    return (
        <div className={styles.background_dark}>
                <div className='background_lines'></div>
                <div className='background_lines background_lines_pos1'></div>
                <div className='background_lines background_lines_pos2'></div>
                <div className='background_lines background_lines_pos3'></div>
                <div className='background_lines background_lines_pos4'></div>
                <div className='background_lines background_lines_pos5'></div>
                <div className='background_lines background_lines_pos6'></div>
                <div className='background_lines background_lines_pos7'></div>
                <div className='background_lines background_lines_pos8'></div>
                <div className='background_lines background_lines_pos9'></div>
                <div className='background_lines background_lines_pos10'></div>
                <div className='background_lines background_lines_pos11'></div>
                <div className='background_lines background_lines_pos12'></div>
                <div className='background_lines background_lines_pos13'></div>
            <div className={styles.content_list}>
                <div className={styles.left_wrraper}>
                    <div className={styles.left_wrraper_text}>
                        <p className={styles.white_text_big}>adidas</p>
                        <p className={styles.red_text_big}>Ozweego</p>
                        <img src={sneakers} alt="Кроссовок" />
                    </div>
                    
                </div>
                <div className={styles.right_wrraper}>
                    <h2 className={styles.white_text}>Shock-absorbing Adiprene+ and Adiprene inserts and elastic EVA midsole fill every step with comfort.</h2>
                </div>
            </div>
        </div>
    );
  }

export default Home;