import React from "react";
import styles from "./Container.module.scss";
import classNames from "classnames";


type ContainerProps = {
    className?: string
    children?: any
}

const Container = (props: ContainerProps) => {

    return (
        <div className={classNames(styles.container, props.className)}>
            {props.children}
        </div>
    )
}
export default Container;