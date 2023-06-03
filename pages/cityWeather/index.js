import Container from "@/components/container/Container";
import Header from "@/components/header/Header";
import WeatherPicture from "@/components/weatherPic/WeatherPicture";
import WeatherData from "@/components/weatherData/WeatherData";
import styles from "./index.module.css";
import BottomContainer from "@/components/bottomContainer/BottomContainer";
import { useState } from "react";
import loadingGif from '../../assets/images/search.gif'
import error from '../../assets/images/error.png'
import Image from "next/image";


const CityWeather = () => {
  const [SearchPosition, setSearchPosition] = useState(true);
  const [weatherData, setweatherData] = useState("");
  const [search , setSearch] = useState(false);
  const [errorData , setErrorData] = useState(false);
  const todayData = (data) => {
    setweatherData({
      city:data.city.name,
      wind: Math.round(data.list[0].wind.speed),
      temp:Math.round( data.list[0].main.temp),
      humidity:Math.round( data.list[0].main.humidity),
      weather: data.list[0].weather[0].main,
      futureTemp:data,
      hourMaker: function (i) {
        let value = data.list[i].dt_txt;
        let day = value.split(" ");
        let time = day[1].split(":");
        let hour = `${time[0]}:${time[1]}`;
        return hour;
      },
    });
  };
  weatherData && console.log(weatherData.hourMaker(3));
  return (
    <Container>
      <Header cityName={weatherData.city} />
      
      {search && <Image src={loadingGif} width={100} />}
      {errorData && <>
        <Image src={error} width={100} />
        <h3>Something Went Wrong , Try Again </h3>
      </>}
      
      {(!SearchPosition && weatherData.weather) && (<>
        <WeatherPicture weatherCondition={weatherData.weather} searchPostion={search} />
      
        <div className={styles.data_container}>
          <WeatherData title="Wind m/s" data={weatherData.wind} />
          <hr className={styles.data_container_hr} />
          <WeatherData title="Temp C" data={weatherData.temp} />
          <hr className={styles.data_container_hr} />
          <WeatherData title="Humidity %" data={weatherData.humidity} />
        </div>
        </>
      )}

      <BottomContainer
        data={todayData}
        searchPosition={SearchPosition}
        searchCondition={setSearchPosition}
        bottomDatas={weatherData}
        showSearch={setSearch}
        errorData={setErrorData}
      />
    </Container>
  );
};
export default CityWeather;
