import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopNav from "./components/TopNav";
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Blog from "./pages/Blog"
import ContactUs from "./pages/ContactUs"
import YesorNo from "./components/contact/YesorNo"
import Write from "./components/Write";
// 각 페이지 컴포넌트

function App() {
  return (
    <Router>
      <div style={styles.container}>
        {/* 네비게이션 바 */}
        <TopNav />

        {/* 라우트 설정 */}
        <div style={styles.pageContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/eee" element={<Write />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/contact/result/" element={<YesorNo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}





// 스타일 수정
const styles = {
  
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fffaea",
    overflowX: "hidden", // 가로 스크롤 방지
  },
  
  pageContent: {
    minHeight: "100vh",
    // padding: "0 40px",
    
    width: "100%", // 네비게이션 바와 동일한 폭
    boxSizing: "border-box",
  },
};



export default App