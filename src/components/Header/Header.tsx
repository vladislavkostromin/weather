import React, {useState, useEffect} from 'react';
import GlobalSvgSelector from '../../assets/GlobalSvgSelector';
import Select from 'react-select'
import styles from './Header.module.scss'
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';

const Header = () => {
  const theme = useTheme()

  const options = [
    { value: 'city-1', label: 'Челябинск' },
    { value: 'city-2', label: 'Екатеринбург' },
    { value: 'city-3', label: 'Омск' }
  ]

  const controlStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.DARK ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
      width: 194,
      height: 37,
      border: 'none',
      borderRadius: 10,
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#fff' : '#000'
    })
  }

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }

  return (
    <div className={styles.header}>
      <div className={styles.wrap}>
        <div className={styles.logo}><GlobalSvgSelector id='header-logo' /></div>
        <div className={styles.title}>React weather</div>
      </div>
      <div className={styles.wrap}>
        <div className={styles.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector 
            id='change-theme' 
          />
        </div>
        <div>
          <Select
            styles={controlStyles} 
            options={options} 
            defaultValue={options[0]}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;