import React from "react";
import styles from "./ServicesPage.module.scss";
import Container from "../../Atoms/Container/Container";
import BgServicesTop from "../../../Assets/Images/Background/bg-services-hero.svg";
import technologies from "../../../Assets/Json/technologies.json";
import services from "../../../Assets/Json/services.json";
import BgServicesAngles from "../../../Assets/Images/Background/bg-services-angles.svg";
import ArrowRight from "../../../Assets/Images/Icons/arrow-bottom-right.svg";
import Subtitle from "../../Atoms/Subtitle/Subtitle";
import {useTranslation} from 'react-i18next';
import Title from "../../Atoms/Title/Title";
import BgServicesDots from "../../../Assets/Images/Background/bg-services_dots.svg";
import BgServicesSpinner from "../../../Assets/Images/Background/bg-services_spinner-lines.svg";
import ContactUs from "../../Organisms/ContactUs/ContactUs";


type Props = {
    className?: string
    to?: string
    children?: string
}

const ServicesPage: React.FC<Props> = (props) => {

    const {t} = useTranslation();

    return (
        <>
            <Container>
                <img className={styles.bgServicesTop} src={BgServicesTop} alt=""/>
                <div className={styles.contentMain}>
                    <div className={styles.leftColumn}></div>
                    <div className={styles.rightColumn}>
                        <Title className={styles.titleServicesMain}>{t('servicesPage.titleServicesMain')}</Title>
                        <p className={styles.textServicesMain}>{t('servicesPage.textServicesMain')}</p>
                    </div>
                </div>

                <div className={styles.contentTechnologies}>
                    <div className={styles.leftColumnTech}></div>
                    <div className={styles.rightColumnTech}>
                        <Subtitle>{t('servicesPage.titleTechnologies')}</Subtitle>
                        {technologies.map((data) => (
                            <div className={styles.processContent}>
                                <div className={styles.containerLine}>
                                    <div className={styles.processLine}></div>
                                </div>
                                <div className={styles.technologiesText}>
                                    <h3 className={styles.subtitleTechnologies}>{data.subtitleTechnologies}</h3>
                                    <p className={styles.descriptionTechCol1}>{data.descriptionTechCol1}</p>
                                    <p className={styles.descriptionTechCol2}>{data.descriptionTechCol2}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            <div className={styles.servicesBg}>
                <img className={styles.bg_services} src={BgServicesAngles} alt=""/>
                <Title className={styles.titleServices}>{t('servicesPage.titleServices')}</Title>
            </div>

            <img className={styles.bgServicesDots} src={BgServicesDots} alt=""/>

            <div className={styles.mainContainer}>
                <Container>
                    <div className={styles.containerProduct}>
                        <div className={styles.leftColumnProduct}>
                            <div className={styles.titleProductStrategy}>
                                <img className={styles.arrowRight} src={ArrowRight} alt=""/>
                                <h3>{t('servicesPage.titleProduct')}</h3>
                            </div>
                            <ul className={styles.textProductLeft}>
                                <li>{t('servicesPage.textProductLeft.one')}</li>
                                <li>{t('servicesPage.textProductLeft.second')}</li>
                                <li>{t('servicesPage.textProductLeft.third')}</li>
                                <li>{t('servicesPage.textProductLeft.fourth')}</li>
                                <li>{t('servicesPage.textProductLeft.fifth')}</li>
                                <li>{t('servicesPage.textProductLeft.sixth')}</li>
                            </ul>
                        </div>

                        <div className={styles.containerRightColumnProduct}>
                            {services.map((data) => (
                                <div className={styles.rightColumnProduct}>
                                    <Subtitle
                                        className={styles.subtitleProductRight}>{data.subtitleProductRight}</Subtitle>
                                    <p className={styles.textProductRight}>{data.textProductRight}</p>
                                    <p className={styles.listProduct}>{data.listProduct}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>

                <img className={styles.bgServicesSpinner} src={BgServicesSpinner} alt=""/>

                <Container className={styles.containerContactUs}>
                    <ContactUs/>
                </Container>
            </div>
        </>
    )
}

export default ServicesPage;