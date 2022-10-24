import React from 'react';
import GlobalSvgSelector from '../../assets/GlobalSvgSelector';
import Select from 'react-select'
import styles from './Header.module.scss'

const Header = () => {
  const options = [
    { value: 'city-1', label: 'Челябинск' },
    { value: 'city-2', label: 'Екатеринбург' },
    { value: 'city-3', label: 'Омск' }
  ]

  const controlStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      width: 194,
      height: 37,
      border: 'none',
      borderRadius: 10,
      zIndex: 100,
    })
  }

  return (
    <div className={styles.header}>
      <div className={styles.wrap}>
        <div className={styles.logo}><GlobalSvgSelector id='header-logo' /></div>
        <div className={styles.title}>React weather</div>
      </div>
      <div className={styles.wrap}>
        <div>
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