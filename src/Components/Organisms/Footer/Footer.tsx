import React from 'react';
import styles from '../Footer/Footer.module.scss';
import LogoWhite from '../../../Assets/Images/Icons/logo-norskness-white.svg';
import SocialMedia from "../../Atoms/SoсialMedia/SocialMedia";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.content_footer}>
                <div><img className={styles.logo_footer} src={LogoWhite} alt=""/></div>
                <ul className={styles.nav_footer}>
                    <li><Link to={'/services'}>Services</Link></li>
                    <li><Link to={'/company'}>Company</Link></li>
                    <li><Link to={'/mvp'}>MVP</Link></li>
                    <li><Link to={'/contacts'}>Contact</Link></li>
                </ul>
                <div>
                    <Link className={styles.title} to={'/contact'}>Get in touch</Link>
                    <div className={styles.contacts}>
                        <p>+47 90089874</p>
                        <p>hi@norskness.com</p>
                    </div>
                    <SocialMedia/>
                </div>
            </div>
            <p className={styles.text}>©2023 Norskness.com LLC, All Rights Reserved</p>
        </div>
    );
};

export default Footer;
