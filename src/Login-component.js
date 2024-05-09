import './css/loginpage.css';

const Loginpage = () => {
  return (
    <div className="container">
      <div className="box">
        <p className="image-item"></p>
        <input type="email" placeholder="📧   Email" />
        <input type="password" placeholder="🔑   Password" />
        <p>
          <p><input type="checkbox"></input>Remeber ID</p>
          <a href="">For got Password?</a>
        </p>
        <div>Login</div>
      </div>
    </div>
  );
};

export default Loginpage;
