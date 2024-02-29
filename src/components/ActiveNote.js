import React from 'react';

function ActiveNote({ note, activeNoteChangeHandler }) {
    return <div className="notepad-active_note">
        {note && <>
            <input type="text" value={note.name} onChange={(e) => activeNoteChangeHandler('name', e.target.value)}/>
            <textarea value={note.text} onChange={(e) => activeNoteChangeHandler('text', e.target.value)}/>
        </>}
    </div>
}

export default ActiveNote;