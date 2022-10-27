import React from 'react';
import styles from './ThisDayInfo.module.scss'
import cloud from '../../assets/images/cloud.png'
import ThisDayItem from './ThisDayItem';

export interface Iitem {
  icon_id: string;
  name: string;
  value: string;
}

const ThisDayInfo = () => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°'
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное'
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков'
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '20° - ощущается как 17°'
    }
  ]

  return (
    <div className={styles.this_day_info}>
      <div className={styles.this_day_info_items}>
        <>
          {items.map((item: Iitem) => 
            <ThisDayItem key={item.icon_id} item={item} />
          )}
        </>
      </div>
      <img className={styles.cloud_img} src={cloud} alt='облако'/>
    </div>
  );
};

export default ThisDayInfo;