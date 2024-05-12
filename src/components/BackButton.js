import { useNavigate } from 'react-router-dom';
import styles from "../css/GlobalButton.module.css";

//전역 함수로 사용
const BackButton = () => {
  const navigate = useNavigate();
  return (
    <p className={styles.backButton} onClick={()=>navigate(-1)}></p>   // 뒤로 가기
  );
};

export default BackButton;