import React from "react";
import Container from "../../Atoms/Container/Container";
import ContactUs from "../../Organisms/ContactUs/ContactUs";
import styles from "../MainPage/MainPage.module.scss";
import HomePageHero from "../../../Assets/Images/Background/bg-homepage-hero.svg";
import Line from "../../../Assets/Images/Icons/line.svg";
import ArrowRight from "../../../Assets/Images/Icons/arrow-bottom-right.svg";
import BgServices from "../../../Assets/Images/Background/bg-homepage-services.svg";
import Plus from "../../../Assets/Images/Icons/plus.svg";
import BgProcess from "../../../Assets/Images/Background/bg-process.svg";
import ArrowLeft from "../../../Assets/Images/Icons/arrow-top-left.svg";
import SeeHowWeWork from "../../Molecules/Button/SeeHowWeWork/SeeHowWeWork";
import ButtonLink from "../../Molecules/Button/ButtonLink/ButtonLink";
import classNames from "classnames";
import Typography from "../../Atoms/Typography/Typography";
import Polygon from "../../../Assets/Images/Icons/polygon.svg";
import {Link} from "react-router-dom";
import process from "../../../Assets/Json/process.json";
import {useTranslation} from 'react-i18next';
import Subtitle from "../../Atoms/Subtitle/Subtitle";
import Title from "../../Atoms/Title/Title";

type Props = {
    className?: string
    to?: string
}

const MainPage: React.FC<Props> = (props) => {

    const {t} = useTranslation();

    return (
        <>
            <div className={styles.containerBgHome}>
                <img className={styles.bg_home_hero} src={HomePageHero} alt=""/>
                <h2 className={styles.title}>{t('homePage.title')}</h2>
                <h2 className={styles.subtitle}>{t('homePage.subtitle')}</h2>
                <SeeHowWeWork className={styles.seeHowWeWork}/>
            </div>

            <Container className={styles.containerOurTeam}>
                <img className={styles.line} src={Line} alt=""/>
                <div className={styles.titleOurTeam}>
                    <img className={styles.arrowRight} src={ArrowRight} alt=""/>
                    <h3 className={styles.titleTeam}>{t('homePage.titleTeam')}</h3>
                </div>
                <p className={styles.textOurTeam}>{t('homePage.textOurTeam')}</p>
                <ButtonLink className={styles.btnContactUs}/>
            </Container>

            <Container className={styles.containerServices}>
                <div className={styles.contentServices}>
                    <h2 className={styles.titleServices}>{t('homePage.titleServices')}</h2>
                    <ul className={styles.textServices}>
                        <li>{t('homePage.titleServices1')}</li>
                        <li>{t('homePage.titleServices2')}</li>
                        <li>{t('homePage.titleServices3')}</li>
                        <li>{t('homePage.titleServices4')}</li>
                        <li>{t('homePage.titleServices5')}</li>
                        <li>{t('homePage.titleServices6')}</li>
                        <li>{t('homePage.titleServices7')}</li>
                    </ul>
                    <Link to={'/services'}
                          className={classNames(styles.button, styles.buttonServices, props.className)}>
                        <Typography font={"Syncopate"} weight={'regular'} type={'header'}
                                    size={'XS'}>{t('homePage.btnServices')}</Typography>
                        <img src={Polygon} alt="arrows"/>
                    </Link>
                </div>
                <div><img className={styles.bgServices} src={BgServices} alt=""/></div>
            </Container>

            <Container className={styles.containerAboutMvp}>
                <div className={styles.containerPlusIcon}>
                    <img className={styles.plusIcon} src={Plus} alt=""/>
                </div>
                <div className={styles.containerTextMvp}>
                    <Subtitle className={styles.titleMvp}>{t('homePage.titleMvp1')}<br/>{t('homePage.titleMvp2')}
                    </Subtitle>
                    <p className={styles.subtitleMvp}>{t('homePage.subtitleMvp')}</p>
                    <p className={styles.descriptionMvp}>{t('homePage.descriptionMvp')}</p>
                    <Link to={'/mvp'} className={classNames(styles.button, styles.buttonMvp, props.className)}>
                        <Typography font={"Syncopate"} weight={'regular'} type={'header'}
                                    size={'XS'}>{t('homePage.btnMvp')}</Typography>
                        <img src={Polygon} alt="arrows"/>
                    </Link>
                </div>
            </Container>

            <div className={styles.mainContainer}>
                <div className={styles.processBg}>
                    <img className={styles.bg_process} src={BgProcess} alt=""/>
                    <Title className={styles.titleProcess}>{t('homePage.titleProcess')}</Title>
                </div>


                <Container className={styles.containerProcess}>
                    {process.map((data) => (
                        <div className={styles.processContent}>
                            <div className={styles.containerLine}>
                                <div className={styles.processLine}></div>
                                <div className={styles.frame}>0{data.frame}</div>
                            </div>
                            <div className={styles.processText}>
                                <Subtitle className={styles.subtitleProcess}>{data.subtitleProcess}</Subtitle>
                                <ul className={styles.descriptionProcess}>
                                    <p>{data.descriptionProcess}</p>
                                </ul>
                            </div>
                        </div>
                    ))}
                </Container>

                <Container className={styles.containerArrowLeft}>
                    <img className={styles.arrow_left} src={ArrowLeft} alt=""/>
                </Container>
            </div>
            <Container className={styles.containerContactUs}>
                <ContactUs/>
            </Container>

        </>
    )
}
export default MainPage;
