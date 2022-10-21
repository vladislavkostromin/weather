import React from 'react';
import { LogoIco } from '../../assets/icons';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.logo}><LogoIco /></div>
        <div className={styles.title}>React weather</div>
      </div>
      <div className={styles.wrap}>

      </div>
    </div>
  );
};

export default Header;