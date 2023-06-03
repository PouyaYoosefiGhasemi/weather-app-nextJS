import styles from "./WeatherData.module.css";

const WeatherData = ({title,data}) => {
  return (
    <div className={styles.data_box}>
      <h2 className={styles.data_title}>{title}</h2>
      <h2 className={styles.data_spc}>{data? data : '-'}</h2>
    </div>
  );
};

export default WeatherData;
