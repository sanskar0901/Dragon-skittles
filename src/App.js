import "./App.css";
import Chatbot from "./pages/Chatbot";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ResumeUpload from "./pages/ResumeUpload";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Chatbot />}></Route>
          <Route path="/resumeUpload" element={<ResumeUpload />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
