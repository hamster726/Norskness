import React from "react";
import {Link} from "react-router-dom";
import styles from "./ButtonLink.module.scss";
import Polygon from "../../../../Assets/Images/Icons/polygon.svg";
import classNames from "classnames";
import Typography from "../../../Atoms/Typography/Typography";
import {useTranslation} from 'react-i18next';


type ButtonLinkProps = {
    className?: string
    to?: string
    children?: any
}
const ButtonLink = (props: ButtonLinkProps) => {

    const { t } = useTranslation();

    return (
      <Link to={props.to || ''} className={classNames(styles.button, props.className)}>
        <Typography font={"Syncopate"} weight={'regular'} type={'header'} size={'XS'}>{props.children || t('homePage.btnContactUs')}</Typography>
        <img src={Polygon} alt="arrows"/>
      </Link>
    )
}

export default ButtonLink;