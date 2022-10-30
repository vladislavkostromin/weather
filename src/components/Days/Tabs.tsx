import React from 'react';
import styles from './Days.module.scss'

interface ITab {
  value: string
}

const Tabs = () => {
  const tabs: ITab[] = [
    {
      value: 'На неделю'
    },
    {
      value: 'На месяц'
    },
    {
      value: 'На 10 дней'
    },
  ]
  return (
    <div className={styles.tabs}>
      <div className={styles.tabs_wrap}>
        {tabs.map((tab: ITab) => 
          <div className={styles.tab} key={tab.value}>
            {tab.value}
          </div>
        )}
      </div>
      <div className={styles.cancel}>Отменить</div>
    </div>
  );
};

export default Tabs;