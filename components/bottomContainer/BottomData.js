import WeatherCondition from "../condition/WeatherCondition";
import styles from "./BottomData.module.css";
const BottomData = ({data,temp,weather}) => {
  return (
    <div className={styles.data_box}>
      <WeatherCondition src={weather} alt="Snowing" width={30}/>
      <div className={styles.data_box_data}>
        <h5>{data}</h5>
        <h4>{Math.round(temp) }'C</h4>
      </div>
    </div>
  );
};

export default BottomData;
