import { useState } from 'react';
import './css/loginpage.css';

const Loginpage = () => {
  const [loginAccess, setLoginAccess] = useState("");
  
  return (
    <div className="container">
      <div className="box">
        <p className="image-item"></p>
        <input type="email" placeholder="📧   Email" />
        <input type="password" placeholder="🔑   Password" />
        <p className='loginSub'>
          <p><input type="checkbox"></input>Remeber ID</p>
          <a href="">For got Password?</a>
        </p>
        <div>Login</div>
      </div>
    </div>
  );
};

export default Loginpage;
