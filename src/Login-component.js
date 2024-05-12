import { useState } from "react";
import styles from "./css/loginpage.module.css";

// useRef 쓰기

const Loginpage = () => {
  return (
    <>
      <div className="container">
        <div className="box">
          <p className="image-item"></p>
          <input type="email" placeholder="📧   Email" />
          <input type="password" placeholder="🔑   Password" />
          <div className="caution" onChange={() => {}}></div>
          <p className="loginSub">
            <a href="">Sign up</a>
            <a href="">Find ID /</a>
            <a href="">Password</a>
          </p>
          <div className="finalCheck">Login</div>
        </div>
      </div>
    </>
  );
};
export default Loginpage;
