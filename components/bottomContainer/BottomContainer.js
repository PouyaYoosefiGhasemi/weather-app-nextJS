import styles from "./BottomContainer.module.css";
import BottomData from "./BottomData";
import BottomControlBox from "./BottomControlBox";
import searchBtn from "../../assets/images/search.png";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
const BottomContainer = ({
  bottomDatas,
  searchPosition,
  searchCondition,
  data,
  showSearch,
  errorData
}) => {
  const [Citydata, setCitydata] = useState("");


  const APIKey = process.env.NEXT_PUBLIC_API_KEY;
  const searchAction = async () => {
    console.log(Citydata);
    showSearch(true)
    errorData(false)
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${APIKey}&units=metric`
      );
      // const  response =await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${Citydata}&appid=${APIKey}&units=metric`)
      console.log(response.data);
      data(response.data);
      searchCondition(false);
      showSearch(false)
    } catch (error) {
      showSearch(false)
      errorData(true)
      console.log(error);
    }
  };

  const times = [1, 2, 3, 4];
  const futureData = times.map((value) => {
    let hour = bottomDatas ? bottomDatas.hourMaker(value) : "-";
    let temps = bottomDatas
      ? bottomDatas.futureTemp.list[value].main.temp
      : "-";
    let pics = bottomDatas
      ? bottomDatas.futureTemp.list[value].weather[0].main
      : "-";

    return <BottomData data={hour} temp={temps} weather={pics} />;
  });
  return (
    <div
      className={`${styles.box_container} ${
        searchPosition && styles.search_on
      }`}
    >
      <div className={styles.linr_btn}></div>
      {!searchPosition && (
        <div className={styles.bottoms_top_container}>
          <h3>Today</h3>
          <h3>Next 7 Days</h3>
        </div>
      )}
      {(!searchPosition && bottomDatas) && (
        <div className={styles.bottom_data_container}>
          {futureData}
        </div>
      )}{" "}
      {searchPosition && (
        <div className={styles.city_input}>
          <input
            type="text"
            placeholder="Enter a City"
            onChange={(el) => setCitydata(el.target.value)}
          />
          <button onClick={searchAction}>
            <Image src={searchBtn} width={30} alt="Search button" />
          </button>
        </div>
      )}
      <BottomControlBox
        boldData={searchPosition}
        searchCondition={searchCondition}
      />
    </div>
  );
};
export default BottomContainer;
