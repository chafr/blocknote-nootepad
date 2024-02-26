import React from 'react';

function Note({ note, activeNoteChangeHandler }) {
    if (!note) {
        return;
    }

    return <>
        <input type="text" value={note.name} onChange={(e) => activeNoteChangeHandler('name', e.target.value)}/>
        <textarea value={note.text} onChange={(e) => activeNoteChangeHandler('text', e.target.value)}/>
    </>
}

export default Note;