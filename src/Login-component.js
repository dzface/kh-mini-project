import styled from "styled-components";
import { useState } from "react";
import imgLogo from "./image/person-icon2.png";
// useRef 쓰기

const Container = styled.div`
  width: 1024px;
  display: flex; /* 부모 요소를 flex container로 설정 */
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  margin: 0 auto;
  background-color: red;
`;
const Box = styled.div`
  width: 300px;
  height: 400px;
  display: flex; /* 자식 요소들을 flex container로 설정 */
  flex-direction: column; /* 자식 요소들을 세로 방향으로 배열 */
  justify-content: center; /* 수직 가운데 정렬 */
  align-items: center; /* 수평 가운데 정렬 */
  text-align: center;
  border-radius: 10px;
  background-color: orange;
`;
const ImegeItem = styled.div`
  width: 100px;
  height: 100px;
  background-image: url("../image/person-icon2.png");
  border-radius: 100%;
  background-color: rgb(255, 255, 255, 0.3);
  opacity: 0.9;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 50px;
`;
const Box_div = styled.div`
  width: 100px;
  height: 20px;
  font-family: "GmarketSansMedium";
  color: beige;
  font-size: 10px;
  border-radius: 2px;
  opacity: 0.5;
`;
const LoginSub = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 10px 0;
  background-color: yellow;
`;
const ATag = styled.a`
  color: black;
  text-decoration-line: none;
`;

const Loginpage = () => {
  return (
    <Container>
      <Box>
        <Box_div>
          <ImegeItem src={imgLogo}>
          </ImegeItem>
          <LoginSub>
            <ATag>Sign up</ATag>
            <ATag>Find ID /</ATag>
            <ATag>Password</ATag>
          </LoginSub>
        </Box_div>
      </Box>
    </Container>
  );
};
const LoginInput = styled.div`
  border-width: 0 0 1px;
  border-color: white;
  background-color: unset;
  margin-bottom: 10px; /* 원하는 마진 값으로 설정 */
`;
export default Loginpage;
{
  /* <div className="container">
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
</div> */
}
