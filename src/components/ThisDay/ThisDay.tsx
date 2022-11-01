import React from 'react';
import GlobalSvgSelector from '../../assets/GlobalSvgSelector';
import { Weather } from '../../store/types';
import styles from './ThisDay.module.scss'

interface IProps {
  weather: Weather
}

const ThisDay = ({ weather }: IProps) => {
  return (
    <div className={styles.this_day}>
      <div className={styles.top}>
        <div className={styles.top_wrap}>
          <div className={styles.temp}>{Math.floor(weather.main.temp)}</div>
          <div className={styles.day}>Сегодня</div>
        </div>
        <GlobalSvgSelector id='sun'/>
      </div>
      <div className={styles.bottom}>
        <div className={styles.time}>Время: 21:00</div>
        <div className={styles.city}>Город: Челябинск</div>
      </div>
    </div>
  );
};

export default ThisDay;