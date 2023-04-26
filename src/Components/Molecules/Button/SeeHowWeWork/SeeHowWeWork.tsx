import React from "react";
import {Link} from "react-router-dom";
import styles from "./SeeHowWeWork.module.scss";
import BottomDown from "../../../../Assets/Images/Icons/lined-arrow-bottom.svg";
import classNames from "classnames";
import Typography from "../../../Atoms/Typography/Typography";
import {useTranslation} from 'react-i18next';


type BottomDownProps = {
    className?: string
    to?: string

}
const SeeHowWeWork = (props: BottomDownProps) => {

    const { t } = useTranslation();

    return (
        <Link to={props.to || ''} className={classNames(styles.button, props.className)}>
            <Typography font={"Syncopate"} weight={'regular'} type={'header'} size={'XS'}>{t('homePage.btnSeeHowWeWork')}</Typography>
            <img src={BottomDown} alt="arrows"/>
        </Link>
    )
}

export default SeeHowWeWork;