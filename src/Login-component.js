import { useState } from "react";
import styles from "./css/loginpage.module.css";

// useRef 쓰기

const Loginpage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <p className={styles.imageItem}></p>
          <input type="email" placeholder="📧   Email" />
          <input type="password" placeholder="🔑   Password" />
          <div className={styles.caution}></div>
          <p className={styles.loginsub}>
            <a href="">Sign up</a>
            <a href="">Find ID /</a>
            <a href="">Password</a>
          </p>
          <div className={styles.finalCheck}>Login</div>
        </div>
      </div>
    </>
  );
};
export default Loginpage;
