import React from "react";
import classNames from "classnames";
import styles from "./Typography.module.scss";

type TypographyProps = {
  type?: 'header' | 'paragraph' | 'title' | 'subtitle' | 'text';
  size?: 'L' | 'M' | 'S' | 'XS';
  font?: 'Syncopate' | 'WorkSans'
  weight?: 'bold' | 'regular';
  className?: string;
  children?: any;
}
const Typography = (props: TypographyProps) => {

  const styleBook = {
    header: {
      L: styles.headerL,
      M: styles.headerM,
      S: styles.headerS,
      XS: styles.headerXS
    },
    paragraph: {
      L: styles.paragraphL,
      M: styles.paragraphL,
      S: styles.paragraphS,
      XS: styles.paragraphS
    },
    font: {
      Syncopate: styles.fontSyncopate,
      WorkSans: styles.fontWorkSans
    },
    weight: {
      regular: styles.fontRegular,
      bold: styles.fontBold
    },
    text: {
      L: styles.captionTextL,
      M: styles.captionText,
      S: styles.captionText,
      XS: styles.captionText
    }
  }

  const renderTag = () => {
    switch (props.type) {
      case "header":
        return <h2
          className={classNames(styleBook[props.type][props.size || 'M'], styleBook.font[props.font || 'WorkSans'], styleBook.weight[props.weight || 'regular'], props.className)}>{props.children}</h2>;
      case "paragraph":
        return <p
          className={classNames(styleBook[props.type][props.size || 'S'], styleBook.font[props.font || 'WorkSans'], styleBook.weight[props.weight || 'regular'], props.className)}>{props.children}</p>;
      case "title":
        return <h3
          className={classNames(styles.title, styleBook.font[props.font || 'WorkSans'], styleBook.weight[props.weight || 'regular'], props.className)}>{props.children}</h3>;
      case "subtitle":
        return <h2
          className={classNames(styles.subtitle, styleBook.font[props.font || 'WorkSans'], styleBook.weight[props.weight || 'regular'], props.className)}>{props.children}</h2>;
      case "text":
        return <span
          className={classNames(styleBook[props.type][props.size || 'S'], styleBook.font[props.font || 'WorkSans'], styleBook.weight[props.weight || 'regular'], props.className)}>{props.children}</span>;
      default:
        return <p
          className={classNames(styles.paragraphS, styleBook.font[props.font || 'WorkSans'], styleBook.weight[props.weight || 'regular'], props.className)}>{props.children}</p>;
    }
  }

  return (
    <>
      {renderTag()}
    </>
  )
}

export default Typography;