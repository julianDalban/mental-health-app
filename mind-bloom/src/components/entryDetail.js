import React, { useState, useEffect, useMemo } from "react";
import { db, auth } from "../config/firebase";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";

const EntryDetail = () => {
  const [entry, setEntry] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams(); // Get the entry ID from the URL parameters

  const entryDoc = useMemo(() => {
    return doc(db, "entries", id);
  }, [id]);

  useEffect(() => {
    const fetchEntry = async () => {
      const user = auth.currentUser;
      if (user) {
        const entrySnapshot = await getDoc(entryDoc);
        if (entrySnapshot.exists() && entrySnapshot.data().uid === user.uid) {
          setEntry(entrySnapshot.data());
        } else {
          alert("Entry not found or you do not have permission to view this entry.");
          navigate("/journal");
        }
      } else {
        alert("You must be signed in to view an entry.");
        navigate("/signin");
      }
    };

    fetchEntry();
  }, [entryDoc, navigate]);

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this entry?");
    if (confirmed) {
      try {
        await deleteDoc(entryDoc);
        alert("Entry deleted successfully!");
        navigate("/journal");
      } catch (e) {
        console.error("Error deleting document: ", e);
        alert("Error deleting document: " + e.message);
      }
    }
  };

  if (!entry) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4">{entry.name}</h1>
        <p className="text-gray-700 mb-4">{entry.entry}</p>
        <p className="text-gray-500 text-sm">
          {new Date(entry.timestamp).toLocaleString()}
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => navigate(`/journal/${id}/edit`)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
          >
            Update Entry
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
          >
            Delete Entry
          </button>
        </div>
        <button
          onClick={() => navigate("/journal")}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 mt-4"
        >
          Back to Journal
        </button>
      </div>
    </div>
  );
};

export default EntryDetail;