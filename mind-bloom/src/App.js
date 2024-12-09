import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import AuthForm from "./containers/form";
import Journal from "./pages/journal";
import NewEntry from "./pages/createentry";
import UpdateEntry from "./pages/updateentry";
import Entry from "./components/entryDetail";
import Modal from "./components/OverlayModal";
import Error from "./pages/errorpage";
import About from "./pages/about";
<<<<<<< HEAD
=======
import ProtectedRoute from "./components/protectedRoute"; // Import the ProtectedRoute component
>>>>>>> 494b93c0b53013a4424140687f1a1e278061ce67
import Services from "./pages/services";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <Navbar openModal={openModal} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path="signin" element={<AuthForm isSignUp={false} />} />
        <Route path="signup" element={<AuthForm isSignUp={true} />} />
        <Route path="about" element={<About />} />
<<<<<<< HEAD
        <Route path="services" element={<Services />} />
        <Route path="journal" element={<Journal />} />
        <Route path="journal/create" element={<NewEntry />} />
        <Route path="journal/:id" element={<Entry />} />
        <Route path="journal/:id/edit" element={<UpdateEntry />} />
=======
        <Route path="journal" element={<ProtectedRoute element={Journal} />} />
        <Route path="journal/create" element={<ProtectedRoute element={NewEntry} />} />
        <Route path="journal/:id" element={<ProtectedRoute element={Entry} />} />
        <Route path="journal/:id/edit" element={<ProtectedRoute element={UpdateEntry} />} />
>>>>>>> 494b93c0b53013a4424140687f1a1e278061ce67
        <Route path="*" element={<Error />} />
      </Routes>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AuthForm isSignUp={false} onClose={closeModal} />
      </Modal>
      <ToastContainer />
    </Router>
  );
}

export default App;
