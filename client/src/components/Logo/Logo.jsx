import { useContext, useEffect, useState } from "react";
import { UserContext } from "../CheckForUser/CheckForUser";
import styles from "./Logo.module.css";

function Background() {
  const { username } = useContext(UserContext);
  const [fadeOn, setFadeOn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOn(true);
    }, 60);
  }, []);

  // useEffect(() => {
  //   username ? setFadeOn(true) : setFadeOn(false);
  // }, [username]);

  return (
    <div className={styles.logoContainer}>
      <svg
        className={[styles.logo, fadeOn ? styles.fadeOnLogo : ""].join(" ")}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#0d6efd"
      >
        <path d="M14,16V21H10V18H9A3,3 0 0,1 6,15V12A1,1 0 0,1 7,11A1,1 0 0,1 8,12V15C8,15.56 8.45,16 9,16H10V6A2,2 0 0,1 12,4A2,2 0 0,1 14,6V14H15A1,1 0 0,0 16,13V11A1,1 0 0,1 17,10A1,1 0 0,1 18,11V13A3,3 0 0,1 15,16H14Z" />
      </svg>
      <div className={styles.logoText}>Tumbleweed</div>
    </div>
  );
}

export default Background;
