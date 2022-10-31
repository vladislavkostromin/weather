import React from 'react';
import GlobalSvgSelector from '../../assets/GlobalSvgSelector';
import ThisDayItem from '../ThisDayInfo/ThisDayItem';
import styles from './Popup.module.scss'

const Popup = () => {
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
    <>
      <div className={styles.blur}></div>
      <div className={styles.popup}>
        <div className={styles.day}>
          <div className={styles.day_temp}>20°</div>
          <div className={styles.day_name}>Среда</div>
          <div className={styles.img}>
            <GlobalSvgSelector id='sun'/>
          </div>
          <div className={styles.day_time}>Время: 21:00</div>
          <div className={styles.day_city}>Город: Челябинск</div>
        </div>
        <div className={styles.this_day_info_items}>
          {items.map(item => 
            <ThisDayItem key={item.icon_id} item={item} />
          )}
        </div>
        <div className={styles.close}>
          <GlobalSvgSelector id='close'/>
        </div>
      </div>
    </>
  );
};

export default Popup;