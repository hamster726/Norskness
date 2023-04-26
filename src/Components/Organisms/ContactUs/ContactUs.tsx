import React from 'react';
import styles from '../ContactUs/ContactUs.module.scss';
import Corner from '../../../Assets/Images/Icons/corner.svg';
import ButtonLink from "../../Molecules/Button/ButtonLink/ButtonLink";
import Container from "../../Atoms/Container/Container";
import {useTranslation} from 'react-i18next';
import Subtitle from "../../Atoms/Subtitle/Subtitle";


const ContactUs = () => {

    const { t } = useTranslation();

    return (
        <Container className={styles.containerContact}>
            <img className={styles.corner_top_left} src={Corner} alt=""/>
            <img className={styles.corner_top_right} src={Corner} alt=""/>
            <div className={styles.contacts}>
                <div>
                    <Subtitle className={styles.titleContact}>{t('homePage.titleContact')}</Subtitle>
                    <p className={styles.subtitleContact}>{t('homePage.subtitleContact')}</p>
                </div>
                <ButtonLink className={styles.btnContact} to={'/contacts'}/>
            </div>
            <img className={styles.corner_bottom_left} src={Corner} alt=""/>
            <img className={styles.corner_bottom_right} src={Corner} alt=""/>
        </Container>
    )
};

export default ContactUs;
