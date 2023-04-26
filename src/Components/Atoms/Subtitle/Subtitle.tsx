import React from "react";
import styles from "./Subtitle.module.scss";
import classNames from "classnames";


type Props = {
    className?: string
    children?: any
}

const Subtitle: React.FC<Props> = (props) => {
    return (
            <h3 className={classNames(styles.subtitle, props.className)}>{props.children}</h3>
    )
}

export default Subtitle;