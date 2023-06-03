import styles from "./Header.module.css";
import Image from "next/image";
import person from "../../assets/images/person.png";

const Header = ({ cityName }) => {
  let monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = new Date().getMonth();
  let monthName = monthsArray[month];
  let day = new Date().getDay();

  return (
    <div className={styles.header_container}>
      <div>
        <h3 className={styles.header_time}>
          Today, {day} {monthName}
        </h3>
        <h1 className={styles.header_city}>{cityName}</h1>
      </div>
      <Image
        src={person}
        alt="profile logo"
        width={45}
        className={styles.header_logo}
      />
    </div>
  );
};
export default Header;
