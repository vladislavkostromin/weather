import React from 'react';
import ThisDay from '../../components/ThisDay/ThisDay';
import ThisDayInfo from '../../components/ThisDayInfo/ThisDayInfo';
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <ThisDay />
      <ThisDayInfo />
    </div>
  );
};

export default Home;