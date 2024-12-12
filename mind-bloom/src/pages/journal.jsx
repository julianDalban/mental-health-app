import React, { useState, useEffect, useMemo } from "react";
import { db, auth } from "../config/firebase";
import { collection, query, where, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Green from './../pictures/Green.jpg';

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  const [entryId, setEntryId] = useState(null);

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

  useEffect(() => {
    if (user) {
      handleDateChange(new Date());
    }
  }, [user]);

  const handleDateChange = async (date) => {
    setSelectedDate(date);
    const formattedDate = date.toLocaleDateString('en-CA'); // Format date as YYYY-MM-DD
    const entryQuery = query(
      collection(db, "entries"),
      where("uid", "==", user.uid),
      where("date", "==", formattedDate)
    );
    const querySnapshot = await getDocs(entryQuery);
    if (!querySnapshot.empty) {
      const entryData = querySnapshot.docs[0].data();
      setTitle(entryData.title || "");
      setEntry(entryData.entry);
      setEntryId(querySnapshot.docs[0].id);
    } else {
      setTitle("");
      setEntry("");
      setEntryId(null);
    }
  };

  const handleSave = async () => {
    const formattedDate = selectedDate.toLocaleDateString('en-CA'); // Format date as YYYY-MM-DD
    try {
      if (entryId) {
        // Update existing entry
        const entryDoc = doc(db, "entries", entryId);
        await updateDoc(entryDoc, {
          title,
          entry,
          timestamp: new Date().toISOString(),
        });
        toast.success("Entry updated successfully!");
      } else {
        // Create new entry
        await addDoc(collection(db, "entries"), {
          uid: user.uid,
          date: formattedDate,
          title,
          entry,
          timestamp: new Date().toISOString(),
        });
        toast.success("Entry saved successfully!");
      }
      setTitle("");
      setEntry("");
      setEntryId(null);
      handleDateChange(selectedDate); // Refresh the entries
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Error adding document: " + e.message);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this entry?");
    if (confirmed && entryId) {
      try {
        const entryDoc = doc(db, "entries", entryId);
        await deleteDoc(entryDoc);
        toast.success("Entry deleted successfully!");
        setTitle("");
        setEntry("");
        setEntryId(null);
        handleDateChange(selectedDate); // Refresh the entries
      } catch (e) {
        console.error("Error deleting document: ", e);
        toast.error("Error deleting document: " + e.message);
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center py-12" style={{ backgroundImage: `url(${Green})` }}>
    <div className="relative z-10 bg-green bg-opacity-90 p-8 rounded-lg shadow-lg max-w-2xl w-full"></div>
    <div className="flex flex-col items-center p-28 justify-center min-h-screen bg-white bg-opacity-90 rounded-xl">
      <div className="bg-gray p-8 rounded-lg -w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Your Journal</h1>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="mb-8"
          locale="en-US" // Start the week on Sunday
        />
        </div>
        {entry ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">Entry for {selectedDate.toDateString()}</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Entry Title"
              className="w-full p-4 border rounded-lg mb-4"
            />
            <textarea
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              placeholder="Write your thoughts here..."
              className="w-full h-64 p-4 border rounded-lg mb-4"
            />
            <div className="flex justify-center">
              <button
                onClick={handleSave}
                className="visible border-1 font-serif border-double border-slate-100 px-5 py-1 rounded-full shadow-lg transition 
      ease-in-out delay-150 bg-emerald-500 hover:-translate-y-1 hover:scale-110 
      hover:bg-teal-500 duration-300"
              >
                Save Entry
              </button>
            </div>
            {entryId && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleDelete}
                  className="visible border-1 font-serif border-double border-slate-75 px-5 py-1 rounded-full shadow-lg transition 
      ease-in-out delay-150 bg-emerald-500 hover:-translate-y-1 hover:scale-110 
      hover:bg-teal-500 duration-300"
                >
                  Delete Entry
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">Create Entry for {selectedDate.toDateString()}</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Entry Title"
              className="w-full p-4 border rounded-lg mb-4"
            />
            <textarea
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              placeholder="Write your thoughts here..."
              className="w-full h-64 p-4 border rounded-lg mb-4"
            />
            <div className="flex justify-center">
            <button
              onClick={handleSave}
              className="visible border-1 font-serif border-double border-slate-100 px-5 py-1 rounded-full shadow-lg transition 
      ease-in-out delay-150 bg-emerald-500 hover:-translate-y-1 hover:scale-110 
      hover:bg-teal-500 duration-300 mb-8"
            >
              Save Entry
            </button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Journal;