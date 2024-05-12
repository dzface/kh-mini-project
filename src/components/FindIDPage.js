import styles from "../css/FindIDPage.module.css";
import "../css/GlobalButton.css";
import BackButton from "./BackButton";
const FindPWPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <BackButton/>
          <p>아이디 찾기</p>
          <div className={styles.imageItem}></div>
          <input type="text" placeholder="이름"/>
          <input type="text" placeholder="주민등록번호"/>
          <p className="finalCheck"></p>
          <p>찾기</p>
        </div>
      </div>
    </>
  );
};
export default FindPWPage;
