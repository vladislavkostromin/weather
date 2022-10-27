import React from 'react';
import IndicatorSvgSelector from '../../assets/IndicatorSvgSelector';
import { Iitem } from './ThisDayInfo';
import styles from './ThisDayInfo.module.scss'

interface IProps {
  item: Iitem;
}

const ThisDayItem = ({item}: IProps) => {
  const {icon_id, name, value} = item
  return (
    <div className={styles.item}>
      <div className={styles.indicator}>
        <IndicatorSvgSelector id={icon_id}/>
      </div>
      <div className={styles.indicator_name}>{name}</div>
      <div className={styles.indicator_value}>{value}</div>
    </div>
  );
};

export default ThisDayItem;