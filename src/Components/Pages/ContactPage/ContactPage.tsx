import React from "react";
import styles from './ContactPage.module.scss';
import Container from "../../Atoms/Container/Container";
import ContactForm from "../../Organisms/ContactForm/ContactForm";
import ContactsMap from "../../../Assets/Images/Background/bg-contacts-map.svg";
import Subtitle from "../../Atoms/Subtitle/Subtitle";
import ContactUs from "../../Organisms/ContactUs/ContactUs";
import {useTranslation} from "react-i18next";


const ContactPage = () => {

    const {t} = useTranslation();

    return (
        <>
            <Container className={styles.containerMain}>
                <div className={styles.containerForm}>
                    <h2 className={styles.titleContacts}>{t('contactForm.titleContacts')}</h2>
                    <p className={styles.subtitleContacts}>{t('contactForm.subtitleContacts')}</p>
                    <ContactForm/>
                </div>
            </Container>

            <div className={styles.mainContainer}>
                <Container className={styles.containerMain}>
                    <div className={styles.containerContacts}>
                        <h2 className={styles.titleContacts}>{t('contactForm.titleContactsSection')}</h2>
                        <h4 className={styles.phone}>+47 900 898 74</h4>
                        <h4 className={styles.email}>hi@norskness.com</h4>
                    </div>

                    <div className={styles.containerAddresses}>
                        <Subtitle>{t('contactForm.titleAddressSection')}</Subtitle>
                        <ul className={styles.listAddresses}>
                            <li>{t('contactForm.addressFirst')}</li>
                            <li>{t('contactForm.addressSecond')}</li>
                            <li>{t('contactForm.addressThird')}</li>
                        </ul>
                    </div>

                </Container>
                <img className={styles.bgContactsMap} src={ContactsMap} alt=""/>
                <Container className={styles.containerContactUs}>
                    <ContactUs/>
                </Container>
            </div>
        </>
    )
}

export default ContactPage;