import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home"
import AuthForm from "./containers/form";
import Journal from "./pages/journal";
import NewEntry from "./pages/createentry";
import UpdateEntry from "./pages/updateentry";
import Entry from "./components/entryDetail";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="signin" element={<AuthForm isSignUp={false} />} />
        <Route path="signup" element={<AuthForm isSignUp={true} />} />
        <Route path="journal" element={<Journal />} />
        <Route path="journal/create" element={<NewEntry />} />
        <Route path="journal/:id" element={<Entry />} />
        <Route path="journal/:id/edit" element={<UpdateEntry />} />
      </Routes>
    </Router>
  );
}

export default App;
