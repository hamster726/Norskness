import React from "react";
import styles from "./Title.module.scss";
import classNames from "classnames";


type Props = {
    className?: string
    children?: any
}

const Title: React.FC<Props> = (props) => {
    return (
        <h1 className={classNames(styles.title, props.className)}>{props.children}</h1>
    )
}

export default Title;