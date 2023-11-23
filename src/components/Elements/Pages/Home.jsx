import React from "react";
import Button from "../UI/Button";
import HideText from "../Text/HideText";
import { BackLine } from "../Dec_el/BackLine";

import sneakers from '../../../img/elements/img/sneakers.png'
import styles from './Pages.module.scss'
import '../../../index.scss'


function Home() {
    return (
        <div className={styles.background_dark}>
            <BackLine>
            </BackLine>
            <div className={styles.content_list}>
                <div className={styles.left_wrraper}>
                    <div className={styles.left_wrraper_text}>
                        <p className={styles.white_text_big}>adidas</p>
                        <img src={sneakers} alt="Кроссовок" />
                        <p className={styles.red_text_big}>Ozweego</p>
                    </div>
                    <span>New <br /> product!</span>
                </div>
                <div className={styles.right_wrraper}>
                    <HideText/>
                    <Button />
                </div>
            </div>
        </div>
    );
  }

export default Home;