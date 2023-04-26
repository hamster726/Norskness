import React from 'react';
import styles from './Header.module.scss';
import LogoColoredIcon from "../../../Assets/Images/Icons/logo-norskness-colored.svg"
import {Link, NavLink} from "react-router-dom";
import Typography from "../../Atoms/Typography/Typography";
import Container from "../../Atoms/Container/Container";

const Header = () => {
  return (
    <Container>
      <header className={styles.headerContainer}>
        <Link to={'/'}>
          <div className={styles.logo}>
            <img src={LogoColoredIcon} alt={'norskness logo'}/>
          </div>
        </Link>
        <nav className={styles.navBar}>
          <NavLink to={'/services'} className={styles.navLink}>
            {({isActive}) => (
              <Typography type={'text'} font={'Syncopate'} weight={isActive ? 'bold' : 'regular'}
                          className={styles.navLinkText}>Services</Typography>
            )}
          </NavLink>
          <NavLink to={'/mvp'} className={styles.navLink}>
            {({isActive}) => (
              <Typography type={'text'} font={'Syncopate'} weight={isActive ? 'bold' : 'regular'}
                          className={styles.navLinkText}>MVP</Typography>
            )}
          </NavLink>
          <NavLink to={'/company'} className={styles.navLink}>
            {({isActive}) => (
              <Typography type={'text'} font={'Syncopate'} weight={isActive ? 'bold' : 'regular'}
                          className={styles.navLinkText}>Company</Typography>
            )}
          </NavLink>
          <NavLink to={'/contacts'} className={styles.navLink}>
            {({isActive}) =>
              (<Typography type={'text'} font={'Syncopate'} weight={isActive ? 'bold' : 'regular'}
                           className={styles.navLinkText}>Contacts</Typography>
              )}
          </NavLink>
        </nav>
      </header>
    </Container>

  )
}

export default Header;