import './App.css';
import React, {useState} from 'react';
import uuid from 'react-uuid';
import ActiveNote from './components/ActiveNote';
import AsideList from './components/AsideList';
import Search from './components/Search';

function App() {
    const [notes, setNotes] = useState([]);
    const [filteredNotes, setFilteredNotes] = useState([]);

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
        <ActiveNote note={notes.find(({ isActive }) => isActive)} activeNoteChangeHandler={activeNoteChangeHandler}/>
        <aside className="notepad-aside">
            <Search notes={notes} setFilteredNotes={setFilteredNotes}/>
            <button className="notepad-aside-create_note_btn"
                    onClick={() => setNotes([{ id: uuid(), name: 'Новая заметка', date: new Date(), text: '', isActive: false }, ...notes])}>
                Создать заметку</button>
            <AsideList notes={filteredNotes} setNotes={setNotes}/>
        </aside>
    </div>
}

export default App;
