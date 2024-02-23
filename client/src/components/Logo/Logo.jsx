import React from "react";
import styles from "./Logo.module.css";

function Background() {
  return (
    <div className={styles.background}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#0d6efd"
      >
        <path d="M14,16V21H10V18H9A3,3 0 0,1 6,15V12A1,1 0 0,1 7,11A1,1 0 0,1 8,12V15C8,15.56 8.45,16 9,16H10V6A2,2 0 0,1 12,4A2,2 0 0,1 14,6V14H15A1,1 0 0,0 16,13V11A1,1 0 0,1 17,10A1,1 0 0,1 18,11V13A3,3 0 0,1 15,16H14Z" />
      </svg>
      <div className={styles.logo}>Tumbleweed</div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>white-balance-sunny</title>
        <path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>account-cowboy-hat</title>
        <path d="M20 22H4V20C4 17.8 7.6 16 12 16S20 17.8 20 20M8 9H16V10C16 12.2 14.2 14 12 14S8 12.2 8 10M19 4C18.4 4 18 4.4 18 5V6H16.5L15.1 3C15 2.8 14.9 2.6 14.7 2.5C14.2 2 13.4 1.9 12.7 2.2L12 2.4L11.3 2.1C10.6 1.8 9.8 1.9 9.3 2.4C9.1 2.6 9 2.8 8.9 3L7.5 6H6V5C6 4.4 5.6 4 5 4S4 4.4 4 5V6C4 7.1 4.9 8 6 8H18C19.1 8 20 7.1 20 6V5C20 4.5 19.6 4 19 4Z" />
      </svg> */}
    </div>
  );
}

export default Background;
