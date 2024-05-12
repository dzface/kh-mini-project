import styles from "../css/FindPWPage.module.css";
import "../css/GlobalButton.css";
const FindPWPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <p className="backBtn"></p>
          <p>비밀번호 찾기</p>
          <div className={styles.imageItem}></div>
          <input type="text" placeholder="이메일"/>
          <input type="text" placeholder="이름"/>
          <input type="text" placeholder="주민등록번호"/>
          <p>찾기</p>
        </div>
      </div>
    </>
  );
};
export default FindPWPage;
