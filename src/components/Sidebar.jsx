import React from "react";
import "../styles/Sidebar.Module.css";

const Sidebar = ({
  setNoteBtnClick,
  noteGroups,
  setSelectedNote,
  selectedNote,
  isMobile,
  display,
  setDisplay,
}) => {


  const handleSelect = (note) => {
    if (isMobile) {
      setDisplay(true);
    }
    setSelectedNote(note);
    // console.log(note)
  };

  return (
    <div
      className={` sidebar ${isMobile ? "mob-sidebar" : ""}`}
      style={{ display: isMobile && display ? "none" : "" }}
    >
      <div className="sidebar-heading ">
        <p className="sidebar-title">Pocket Notes</p>
        <button
          className="create-notes flex flex-row"
          onClick={() => setNoteBtnClick(true)}
          
        
        >
          <svg
            style={{
              position: "fixed",
              bottom: "40px",
              left: "27%",
              transform: "translateX(-50%)",
              // marginLeft: "15rem",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#16008b", // Optional background color
            }}
            viewBox="0 0 21 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.1522 8.13587V12.4498H0.312071V8.13587H20.1522ZM12.5581 0.0248901V21.0975H7.92606V0.0248901H12.5581Z"
              fill="white"
              transform="scale(0.5)" // Reduces the size of the +
        transform-origin="center" // Keeps it centered
            />
          </svg>
          
        </button>
      </div>
      <div className="sidebar-notes-list flex justify-start">
        {noteGroups &&
          noteGroups.map((note, index) => {
            const notes = note.name.split(" ");
            const firstLetters = notes.map((word) => word.charAt(0));
            return (
              <div
                className={`sidebar-note-element flex flex-row  justify-start ${
                  note.id === selectedNote.id ? "note-selected" : ""
                }`}
                key={index}
                onClick={() => handleSelect(note)}
              >
                <div
                  className="circle note-list-icon flex"
                  style={{ marginRight: "0.5rem", backgroundColor: note.color }}
                >
                  {firstLetters[0]}
                  {firstLetters[firstLetters.length - 1]}
                </div>
                <p className="sidebar-note-title">{note.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
