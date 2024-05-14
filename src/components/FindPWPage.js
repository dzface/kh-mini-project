import styles from "../css/FindPWPage.module.css";
import BackButton from "./BackButton";
import Background from "../background/Background";
import Header from "../background/Header";
const FindPWPage = () => {
  return (
    <Background>
      <Header />
      <div className={styles.container}>
        <div className={styles.box}>
          <BackButton />
          <p className={styles.title}>비밀번호 찾기</p>
          <div className={styles.imageItem}></div>
          <input type="text" placeholder="이메일" />
          <input type="text" placeholder="이름" />
          <input type="text" placeholder="주민등록번호" />
          <p></p>
          <div className={styles.finalCheck}>찾기</div>
        </div>
      </div>
    </Background>
  );
};
export default FindPWPage;
