import React, { useState, useEffect } from "react";
import { db, auth } from "../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEntry = () => {
  const [entry, setEntry] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); // Get the entry ID from the URL parameters

  useEffect(() => {
    const fetchEntry = async () => {
      const user = auth.currentUser;
      if (user) {
        const entryDoc = doc(db, "entries", id);
        const entrySnapshot = await getDoc(entryDoc);
        if (entrySnapshot.exists() && entrySnapshot.data().uid === user.uid) {
          const entryData = entrySnapshot.data();
          setName(entryData.name);
          setEntry(entryData.entry);
        } else {
          alert("Entry not found or you do not have permission to edit this entry.");
          navigate("/journal");
        }
      } else {
        alert("You must be signed in to update an entry.");
        navigate("/signin");
      }
    };

    fetchEntry();
  }, [id, navigate]);

  const handleSave = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        const entryDoc = doc(db, "entries", id);
        await updateDoc(entryDoc, {
          name,
          entry,
          timestamp: new Date().toISOString(),
        });
        alert("Entry updated successfully!");
        navigate("/journal");
      } catch (e) {
        console.error("Error updating document: ", e);
        alert("Error updating document: " + e.message);
      }
    } else {
      alert("You must be signed in to update an entry.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4">Update Journal Entry</h1>
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

export default UpdateEntry;