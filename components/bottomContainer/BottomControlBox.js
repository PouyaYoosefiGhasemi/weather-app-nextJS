import styles from "./BottomControlBox.module.css"
import Image from "next/image";
import setting from "../../assets/images/setting-S.png";
import home from "../../assets/images/home.png";
import search from "../../assets/images/search.png"; 
const BottomControlBox = ({boldData,searchCondition})=>{
    const showSearch = ()=>{
        searchCondition(true)
    }
    const showData = ()=>{
       {!boldData && searchCondition(false)}
    }
    return(
        <div className={styles.control_container}>
            <div onClick={showData} className={`${styles.control_home} ${styles.control_unit} ${!boldData&&styles.pageOn}`}>
             <Image src={home} alt="weather status"  width={25} />
            <h3 className={styles.img_name}>Home</h3>
            </div>
            <div onClick={showSearch} className={`${styles.control_home} ${styles.control_unit} ${boldData&&styles.pageOn}`}>
            <Image src={search} alt="weather status" width={25} />
            <h3 className={styles.img_name}>search</h3>
            </div>

            <div className={`${styles.control_home} ${styles.control_unit}`}>
            <Image src={setting} alt="weather status" width={20}/>
            <h3 className={styles.img_name}>setting</h3>
            </div>
           
        </div>
    )
}

export default BottomControlBox