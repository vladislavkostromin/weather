import React from 'react';
import GlobalSvgSelector from '../../assets/GlobalSvgSelector';
import { IDay } from './Days';
import styles from './Days.module.scss'

interface IProps {
  day: IDay;
}

const Card = ({day}: IProps) => {
  const {
    day_val, 
    day_info, 
    icon_id, 
    temp_day, 
    temp_night, 
    info 
  } = day
  return (
    <div className={styles.card}>
      <div className={styles.day}>{day_val}</div>
      <div className={styles.day_info}>{day_info}</div>
      <div className={styles.img}>
        <GlobalSvgSelector id={icon_id}/>
      </div>
      <div className={styles.temp_day}>{temp_day}</div>
      <div className={styles.temp_night}>{temp_night}</div>
      <div className={styles.temp_info}>{info}</div>
    </div>
  );
};

export default Card;