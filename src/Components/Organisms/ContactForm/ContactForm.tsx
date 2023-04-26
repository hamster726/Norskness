import React from "react";
import {useForm} from "react-hook-form";
import styles from "./ContactForm.module.scss";
import {Form} from 'react-bootstrap';
import Input from '../../Atoms/Input/Input';
import {useTranslation} from "react-i18next";
import classNames from "classnames";
import Polygon from "../../../Assets/Images/Icons/polygon.svg";
import {useState} from 'react';


interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    acceptTerms: boolean;
}

type Props = {
    className?: string
    to?: string
}

const ERRORS = {
    required: 'This information is mandatory',
    emailIsIncorrect: 'Invalid email',
}

const ContactForm: React.FC<Props> = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const [acceptTerms, setAcceptTerms] = useState(false);

    const {t} = useTranslation();

    const onSubmit = (data: FormData) => {
        alert(JSON.stringify(data));
    };

    const getEmailValidationError = () => {
        if (errors.email?.type === 'required') {
            return ERRORS.required
        }

        if (errors.email?.type === 'pattern') {
            return ERRORS.emailIsIncorrect
        }

        return null
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <Input
                    placeholder={t('contactForm.firstName')}
                    maxLength={50}
                    {...register("firstName", {
                        required: true,
                        pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+[^,.'-]$/
                    })}
                    error={errors.firstName ? ERRORS.required : null}
                />
            </label>

            <label>
                <Input
                    placeholder={t('contactForm.lastName')}
                    maxLength={50}
                    {...register("lastName", {
                        required: true,
                        pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+[^,.'-]$/
                    })}
                    error={errors.lastName ? ERRORS.required : null}
                />
            </label>

            <label>
                <Input
                    type={'text'}
                    placeholder={t('contactForm.email')}
                    {...register("email", {
                        required: true,
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                    error={getEmailValidationError()}
                />
            </label>

            <label>
                <Input
                    placeholder={t('contactForm.phone')}
                    {...register("phone", {
                        required: true,
                    })}
                    error={errors.phone ? ERRORS.required : null}
                />
            </label>

            <label>
                <Input
                    placeholder={t('contactForm.message')}
                    {...register("message", {
                        required: true,
                    })}
                    error={errors.message ? ERRORS.required : null}
                />
            </label>

            <label className={styles.checkboxLabel}>
                <Input
                    type="checkbox"
                    {...register("acceptTerms", {required: true})}
                    checked={acceptTerms}
                    // className={classNames(styles.checkbox)}
                    onChange={e => setAcceptTerms(e.target.checked)}
                />
                <span aria-hidden="true"></span>
                <p>I agree to the processing personal data</p>
            </label>
            {errors.acceptTerms && <p className={styles.errorChecked}>{t('contactForm.checkboxError')}</p>}

            <div className={styles.inputWithIcon}>
                <Input
                    type="submit"
                    value="Submit Form"
                    className={classNames(styles.button, styles.buttonSubmit, props.className)}
                    onClick={handleSubmit(onSubmit)}
                />
                <img src={Polygon} alt="arrows"/>
            </div>
        </Form>
    );
};

export default ContactForm;
