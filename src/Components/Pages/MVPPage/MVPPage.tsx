import React, {useRef} from "react";
import styles from './MVPPage.module.scss';
import Container from "../../Atoms/Container/Container";
import ButtonLink from "../../Molecules/Button/ButtonLink/ButtonLink";
import BgMvpHeroLeft from "../../../Assets/Images/Background/bg-mvp-heroleft.svg";
import BgMvpHeroRight from "../../../Assets/Images/Background/bg-mvp-heroright.svg";
import LineMvp from "../../../Assets/Images/Icons/line-mvp.svg";
import BallMvp from "../../../Assets/Images/Icons/ball-mvp.svg";
import BgCentralMvp from "../../../Assets/Images/Background/bg-mvp-central.svg";
import Subtitle from "../../Atoms/Subtitle/Subtitle";
import {useTranslation} from "react-i18next";
import mvp from "../../../Assets/Json/mvp.json";
import mvpCentralColumn from "../../../Assets/Json/central-column-mvp.json";
import ContactUs from "../../Organisms/ContactUs/ContactUs";

type Props = {
    className?: string
    to?: string
    children?: string
}

const MVPPage = () => {

    const {t, i18n} = useTranslation();

    return (
        <div>
            <Container className={styles.containerMVPMain}>
                <h2 className={styles.titleMVPMain}>{t('mvpPage.titleMVPMain')}</h2>
                <p className={styles.subtitleMVPMain}>{t('mvpPage.subtitleMVPMain')}</p>
                <p className={styles.textMVPMain}>{t('mvpPage.textMVPMain')}</p>
                <ButtonLink className={styles.btnContact} to={'/contact'}/>
            </Container>


            <img className={styles.bgMvpHeroLeft} src={BgMvpHeroLeft} alt=""/>
            <img className={styles.bgMvpHeroRight} src={BgMvpHeroRight} alt=""/>


            <div className={styles.containerBgCentralMvp}>
                <div className={styles.coverGradientTop}>
                    <div className={styles.coverGradientBottom}>
                        <img className={styles.bgCentralMvp} src={BgCentralMvp} alt=""/>
                    </div>
                </div>
            </div>

            <Container className={styles.containerOffer}>
                <Subtitle className={styles.subtitleOfferDark}>SPECIAL OFFER TO TEST OUR SERVICE</Subtitle>
                <Subtitle className={styles.subtitleOfferBlue}>First Working Version Within 10 Days</Subtitle>

                {mvp.map((data) => (
                    <div className={styles.contentOffer}>
                        <div className={styles.leftColumnOffer}>
                            <div className={styles.frameRight}>0{data.leftColumnOffer.frame}</div>
                            <h4 className={styles.titleOfferItem}>{data.leftColumnOffer.titleOfferItem}</h4>
                            <p>{data.leftColumnOffer.descriptionOffer}</p>
                        </div>

                        <div className={styles.lineColumnOffer}>
                            <img className={styles.lineMvp} src={LineMvp} alt=""/>
                            <img className={styles.ballMvp} src={BallMvp} alt=""/>
                        </div>

                        <div className={styles.rightColumnOffer}>
                            <div className={styles.frameLeft}>0{data.rightColumnOffer.frame}</div>
                            <h4 className={styles.titleOfferItem}>{data.rightColumnOffer.titleOfferItem}</h4>
                            <p>{data.rightColumnOffer.descriptionOffer}</p>
                        </div>
                    </div>
                ))}

                {mvpCentralColumn.map((data) => (
                    <div className={styles.centerColumnOffer}>
                        <div className={styles.frameCenter}>0{data.centerColumnOffer.frame}</div>
                        <h4 className={styles.titleOfferItem}>{data.centerColumnOffer.titleOfferItem}</h4>
                        <p>{data.centerColumnOffer.descriptionOffer}</p>
                    </div>
                ))}
            </Container>

            <Container className={styles.containerContactUs}>
                <ContactUs/>
            </Container>
        </div>
    )
}


export default MVPPage;