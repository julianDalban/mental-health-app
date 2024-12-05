import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home"
import AuthForm from "./containers/form";
import Journal from "./pages/journal";
import NewEntry from "./pages/createentry";
import UpdateEntry from "./pages/updateentry";
import Entry from "./components/entryDetail";
import Modal from "./components/OverlayModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <Navbar openModal={openModal} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="signin" element={<AuthForm isSignUp={false} />} />
        <Route path="signup" element={<AuthForm isSignUp={true} />} />
        <Route path="journal" element={<Journal />} />
        <Route path="journal/create" element={<NewEntry />} />
        <Route path="journal/:id" element={<Entry />} />
        <Route path="journal/:id/edit" element={<UpdateEntry />} />
      </Routes>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AuthForm isSignUp={false} onClose={closeModal} />
      </Modal>
    </Router>
  );
}

export default App;
