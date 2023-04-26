import React from 'react';
import {Input as ReactInput, InputProps as ReactInputProps} from 'reactstrap';
import classNames from 'classnames';
import styles from './Input.module.scss';


export type InputProps = ReactInputProps & {
    disablelabel?: boolean,
    className?: string,
    error?: string | null,
    placeholder?: any
}

export const Input: React.FC<InputProps> = React.forwardRef((props, ref: any) => {

    var inputProps = {
        ...props,
        disablelabel: undefined,
        error: undefined
    }

    return (
        <div className={props.error ? styles.error_bg : ''}>
            <label className={styles.label}>
                <ReactInput
                    {...inputProps}
                    innerRef={ref}
                    placeholder={props.placeholder}
                    className={classNames(styles.main, props.className)}
                    style={props.style}
                    type={props.type || "text"}
                />
                {props.disablelabel !== true &&
                    <span>{props.placeholder}</span>
                }
            </label>
            {props.error &&
                <div className={styles.error_tip}>
                    {props.error}
                </div>
            }
        </div>
    );
})

export default Input;
