import React from "react";
import Container from "../../Atoms/Container/Container";
import styles from './CompanyPage.module.scss';
import BgCompanyHero from "../../../Assets/Images/Background/bg-company-hero.svg";
import Subtitle from "../../Atoms/Subtitle/Subtitle";
import team from "../../../Assets/Json/company.json";
import BgCompanyDots from "../../../Assets/Images/Background/company-dots.svg";
import BgOurStory from "../../../Assets/Images/Background/bg-our-story.svg";
import ContactUs from "../../Organisms/ContactUs/ContactUs";
import {useTranslation} from "react-i18next";


type Props = {
    className?: string
    to?: string
    children?: string
}

const CompanyPage: React.FC<Props> = (props) => {

    const {t} = useTranslation();

    return (
        <>
            <Container className={styles.containerCompany}>
                <img className={styles.bgCompanyHero} src={BgCompanyHero} alt=""/>
                <div className={styles.textCompanyMain}>
                    <h2>{t('companyPage.titleCompanyMain')}</h2>
                    <p>{t('companyPage.subtitleCompanyMain')}</p>
                </div>
            </Container>

            <div className={styles.containerMission}>
                <Subtitle className={styles.subtitleMission}>{t('companyPage.subtitleMission')}</Subtitle>
                <p>{t('companyPage.descriptionMission')}</p>
            </div>

            <Container className={styles.containerTeam}>
                <h2>{t('companyPage.titleTeam')}</h2>
                <div className={styles.contentTeam}>
                    {team.map(data => (
                        <div className={styles.containerTextTeam}>
                            <img className={styles.imgPerson} src={data.image} alt=""/>
                            <div className={styles.textTeam}>
                                <p className={styles.subtitleTeam}>{data.subtitleTeam}</p>
                                <p className={styles.positionTeam}>{data.positionTeam}</p>
                                <p className={styles.descriptionTeam}>{data.textTeam}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            <img className={styles.bgDots} src={BgCompanyDots} alt=""/>
            <div className={styles.containerOurStory}>
                <div className={styles.coverGradient}>
                    <img className={styles.bgOurStory} src={BgOurStory} alt=""/>
                    <div className={styles.absolutContainer}>
                        <div className={styles.flexContainer}>
                            <div className={styles.leftColumn}></div>
                            <div className={styles.rightColumn}>
                                <h2>{t('companyPage.titleOurStory')}</h2>
                                <p>{t('companyPage.textOurStory')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Container className={styles.containerContactUs}>
                <ContactUs/>
            </Container>
        </>
    )
}

export default CompanyPage;
