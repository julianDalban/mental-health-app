import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home"
import AuthForm from "./containers/form";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="signin" element={<AuthForm isSignUp={false} />} />
        <Route path="signup" element={<AuthForm isSignUp={true} />} />
      </Routes>
    </Router>
  );
}

export default App;
