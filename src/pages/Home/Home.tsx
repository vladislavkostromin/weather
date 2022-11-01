import React, { useEffect } from 'react';
import Days from '../../components/Days/Days';
import ThisDay from '../../components/ThisDay/ThisDay';
import ThisDayInfo from '../../components/ThisDayInfo/ThisDayInfo';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectCurrentWeatherData } from '../../store/selectors';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import styles from './Home.module.scss'

const Home = () => {
  const dispatch = useCustomDispatch()
  const { weather } = useCustomSelector(selectCurrentWeatherData)

  useEffect(() => {
    dispatch(fetchCurrentWeather('chelyabinsk'))
  }, [])
  return (
    <>
      <div className={styles.home}>
        <ThisDay weather={weather}/>
        <ThisDayInfo />
      </div>
      <Days />
    </>
  );
};

export default Home;