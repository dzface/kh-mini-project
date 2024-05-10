import "./css/Signuppage.css";

const SignupPage = ()=>{

  return(
    <>
    <div className="container">
      <div className="box">
        <ul>회원가입
          <li><input type="text" placeholder="이메일"/></li>
          <li><input type="text" placeholder="비밀번호"/></li>
          <li><input type="text" placeholder="이름"/></li>
          <li><input type="text" placeholder="주민등록번호"/></li>
          <li><input type="text" placeholder="닉네임"/></li>
          <li><input type="text" placeholder="핸드폰 번호"/></li>
          <li><input type="text" placeholder="주소"/></li>
        </ul>
        <span>가입</span>
      </div>

    </div>
    </>
  )
}
export default SignupPage;