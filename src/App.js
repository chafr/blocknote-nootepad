import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';
import ActiveNote from './components/ActiveNote';
import AsideList from './components/AsideList';
import Search from './components/Search';


const Notepad = styled.div`
    display: grid;
    grid-template-columns: 1fr 300px;
    justify-content: space-between;
    gap: 96px;
    padding: 24px;
`;

const CreateNoteBtn = styled.button`
    margin-top: 64px;
`;

function App() {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('bn-notes')) || []);
    const [filteredNotes, setFilteredNotes] = useState([]);

    useEffect(() => {
        localStorage.setItem('bn-notes', JSON.stringify(notes));
    }, [notes]);

    function activeNoteChangeHandler(key, value) {
        const copy = [...notes].map((note) => {
            if (note.isActive) {
                note[key] = value;
                note.date = new Date().toLocaleString();
            }

            return note;
        }).sort((note1, note2) => note2.date - note1.date);
        setNotes(copy);
    }

    return <Notepad>
        <ActiveNote note={notes.find(({ isActive }) => isActive)} activeNoteChangeHandler={activeNoteChangeHandler}/>
        <aside className="notepad-aside">
            <Search notes={notes} setFilteredNotes={setFilteredNotes}/>
            <CreateNoteBtn onClick={() => setNotes([{ id: uuid(), name: 'Новая заметка', date: new Date().toLocaleString(), text: '', isActive: false }, ...notes])}>
                Создать заметку
            </CreateNoteBtn>
            <AsideList notes={filteredNotes} setNotes={setNotes}/>
        </aside>
    </Notepad>
}

export default App;
