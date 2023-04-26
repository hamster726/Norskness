import React from "react";
import styles from './Page404.module.scss';
import Container from "../../Atoms/Container/Container";
import Typography from "../../Atoms/Typography/Typography";
import {useTranslation} from "react-i18next";
import ButtonLink from "../../Molecules/Button/ButtonLink/ButtonLink";
import BgImg from "../../../Assets/Images/Background/bg-404_dots.svg";

const Page404 = () => {

  const {t} = useTranslation();

  return (
    <Container className={styles.container}>
      <div className={styles.message}>
        <Typography type={'header'} size={'L'} font={'Syncopate'} weight={'bold'} className={styles.title}>{t('errorPage.title')}</Typography>
        <Typography type={'subtitle'} font={'WorkSans'} weight={'regular'} size={'L'} className={styles.title}>{t('errorPage.subtitle')}</Typography>
        <ButtonLink to={'/'} className={styles.backButton}>
          <Typography type={'text'} size={'L'} font={'Syncopate'} weight={'regular'}>{t('errorPage.backButton')}</Typography>
        </ButtonLink>
        <div className={styles.bgContainer}>
          <img src={BgImg} alt={'background circle dots'}/>
        </div>
      </div>
    </Container>
  )
}

export default Page404;