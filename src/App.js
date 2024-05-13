import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SighupPage";
import FindIDPage from "./components/FindIDPage";
import FindPWPage from "./components/FindPWPage";
import { useEffect, useState } from "react";
function App() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    axios.get("/api/test").then((res) => {
      setHello(res.data);
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="findid" element={<FindIDPage />} />
        <Route path="findpw" element={<FindPWPage />} />
      </Routes>
    </Router>
  );
}
export default App;
