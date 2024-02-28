import './App.css';
import React, {useState} from "react";
import uuid from 'react-uuid';
import Note from './components/Note';
import AsideList from './components/AsideList';

function App() {
    const [notes, setNotes] = useState([]);

    function activeNoteChangeHandler(key, value) {
        const copy = [...notes].map((note) => {
            if (note.isActive) {
                note[key] = value;
                note.date = new Date();
            }

            return note;
        }).sort((note1, note2) => note2.date - note1.date);
        setNotes(copy);
    }

    return <div className="notepad">
        <div className="notepad-active_note">
            <Note note={notes.find(({ isActive }) => isActive)} activeNoteChangeHandler={activeNoteChangeHandler}/>
        </div>
        <aside className="notepad-aside">
            <button className="notepad-aside-create_note_btn"
                    onClick={() => setNotes([{ id: uuid(), name: 'Новая заметка', date: new Date(), text: '', isActive: false }, ...notes])}>
                Создать заметку</button>
            <ol className="notepad-aside-list">
                <AsideList notes={notes} setNotes={setNotes}/>
            </ol>
        </aside>
    </div>
}

export default App;
