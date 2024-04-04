import React from 'react';
import styled from "styled-components";


const StyledActiveNote = styled.div`
    display: grid;
    grid-template-rows: 40px 200px;
    gap: 16px;
`;

function ActiveNote({ note, activeNoteChangeHandler }) {
    return <StyledActiveNote>
        {note && <>
            <input type="text" value={note.name} onChange={(e) => activeNoteChangeHandler('name', e.target.value)}/>
            <textarea value={note.text} onChange={(e) => activeNoteChangeHandler('text', e.target.value)}/>
        </>}
    </StyledActiveNote>
}

export default ActiveNote;