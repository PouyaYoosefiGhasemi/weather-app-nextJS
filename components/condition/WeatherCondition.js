import Image from "next/image"
import windy from "../../assets/images/weather-condition/summer.png";
import snowing from "../../assets/images/weather-condition/snowing.png";
import cloud from "../../assets/images/weather-condition/cloud.png";
import rain from "../../assets/images/weather-condition/rain-1.png";
import tornado from "../../assets/images/weather-condition/tornado.png";
import sun from "../../assets/images/weather-condition/sun.png";
import storm from "../../assets/images/weather-condition/storm.png";


const WeatherCondition = (props)=>{
    const pictures={
        "Snow" : snowing,
        "Clouds" : cloud,
        "Rain" : rain,
        "Drizzle" : rain,
        "Thunderstorm" : storm,
        "Tornado" : tornado,
        "Squall" : windy,
        "Fog" : '-',
        "Haze" : '-',
        "Mist" : '-',
        "Dust" : '-',
        "Sand" : '-',
        "Smoke" : '-',
        "Ash" : '-',
        "Clear" : sun,

    }


    return <Image width={props.width} alt={props.alt} src={pictures[props.src]} />
}
export default WeatherCondition
