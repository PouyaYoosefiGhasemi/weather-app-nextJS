import styles from "./WeatherPicture.module.css";
import WeatherCondition from "../condition/WeatherCondition";
import Image from "next/image";
import loadingGif from '../../assets/images/search.gif'
const WeatherPicture = ({weatherCondition , searchPostion}) => {
  return (
    <div className={styles.picture_cont}>
      {/* <Image src={loadingGif} width={100} /> */}
      <WeatherCondition src={weatherCondition} alt="weather status" width={180} />
      <h2 className={styles.weather_desc}>{weatherCondition && weatherCondition}</h2>
    </div>
  );
};
export default WeatherPicture;
