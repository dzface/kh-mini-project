import styled from "styled-components";
import { useState } from "react";
// useRef 쓰기
const Loginpage = () => {
  const container = styled.div`
    width: 1024px;
    display: flex; /* 부모 요소를 flex container로 설정 */
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center; /* 수직 가운데 정렬 */
    margin: 0 auto;
    background-color: white;
  `;
  const box = styled.div`
    width: 300px;
    height: 400px;
    display: flex; /* 자식 요소들을 flex container로 설정 */
    flex-direction: column; /* 자식 요소들을 세로 방향으로 배열 */
    justify-content: center; /* 수직 가운데 정렬 */
    align-items: center; /* 수평 가운데 정렬 */
    text-align: center;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
  `;
const box_div = styled.div`
width: 100px;
height: 20px;
font-family: 'GmarketSansMedium';
color: beige;
font-size: 10px;
border-radius: 2px;
opacity: 0.5;
`;
  return (
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
  );
};

export default Loginpage;
