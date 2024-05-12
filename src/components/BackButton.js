import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // 뒤로 가기
  };

  return (
    <p className="backBtn" onClick={handleClick}></p>
  );
};

export default BackButton;