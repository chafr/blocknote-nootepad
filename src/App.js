import './App.css';
import React, {useState} from "react";
import uuid from 'react-uuid';
import Note from './components/Note';

function App() {
    const [notes, setNotes] = useState([]);

    function noteBtnClickHandler(id) {
        const copy = [...notes];
        copy.map((note) => {
            note.isActive = note.id === id;
            return note;
        });
        setNotes(copy);
    }

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
                {notes.map(({ id, name, date }) => <li key={id}>
                    <button onClick={() => noteBtnClickHandler(id)}>{name}</button>
                    <div>{date.toLocaleString()}</div>
                </li>)}
            </ol>
        </aside>
    </div>
}

export default App;
