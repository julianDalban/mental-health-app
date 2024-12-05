import React, { useState, useMemo } from "react";
import { db, auth } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const NewEntry = () => {
  const [entry, setEntry] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const journalRef = useMemo(() => collection(db, "entries"), []);

  const handleSave = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        const docRef = await addDoc(journalRef, {
          name,
          entry,
          uid: user.uid,
          timestamp: new Date().toISOString(),
        });
        console.log("Document written with ID: ", docRef.id);
        alert("Entry saved successfully!");
        navigate("/journal");
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("Error adding document: " + e.message);
      }
    } else {
      alert("You must be signed in to save an entry.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4">New Journal Entry</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Entry Title"
          className="w-full p-4 border rounded-lg mb-4"
        />
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Write your thoughts here..."
          className="w-full h-64 p-4 border rounded-lg mb-4"
        />
        <button
          onClick={handleSave}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500"
        >
          Save Entry
        </button>
      </div>
    </div>
  );
};

export default NewEntry;