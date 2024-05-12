import { useState } from "react";
import styles from "./css/loginpage.module.css";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [caution, setCaution] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    checkInputs(event.target.value, password);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    checkInputs(email, event.target.value);
  };

  const checkInputs = (inputEmail, inputPassword) => {
    if (inputEmail !== "" && inputPassword !== "") {
      setCaution("확인되었습니다.");
    } else {
      setCaution("값을 입력하세요.");
    }
  };
  const handleLogin = () => {
    if (caution === "확인되었습니다.") {
      // 로그인 로직 추가
      console.log("로그인되었습니다.");
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <p className={styles.imageItem}></p>
          <input
            type="email"
            placeholder="📧   Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="🔑   Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div id="caution" className={styles.caution}>
            {caution}
          </div>
          <p className={styles.loginsub}>
            <a href="">Sign up</a>
            <a href="">Find ID /</a>
            <a href="">Password</a>
          </p>
          <div
            className={styles.finalCheck}
            onClick={handleLogin}
            style={{
              cursor: caution === "확인되었습니다." ? "pointer" : "not-allowed",
            }}
          >
            Login
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
