import React, { useState, useEffect, useMemo } from "react";
import { db, auth } from "../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  const user = auth.currentUser;

  const journalQuery = useMemo(() => {
    if (user) {
      return query(collection(db, "entries"), where("uid", "==", user.uid));
    }
    return null;
  }, [user]);

  useEffect(() => {
    const fetchEntries = async () => {
      if (journalQuery) {
        const querySnapshot = await getDocs(journalQuery);
        const fetchedEntries = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEntries(fetchedEntries);
      }
    };

    fetchEntries();
  }, [journalQuery]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4">Your Journal</h1>
        <div className="mt-8">
          {entries.length > 0 ? (
            <ul>
              {entries.map((entry) => (
                <li key={entry.id} className="mb-4 p-4 border rounded-lg">
                  <p className="text-gray-700">{entry.entry}</p>
                  <p className="text-gray-500 text-sm">
                    {new Date(entry.timestamp).toLocaleString()}
                  </p>
                  <button
                    onClick={() => navigate(`/journal/${entry.id}`)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
                  >
                    View Details
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">No entries found.</p>
          )}
        </div>
        <button
          onClick={() => navigate("/journal/create")}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 mt-8"
        >
          Create a new entry
        </button>
      </div>
    </div>
  );
};

export default Journal;