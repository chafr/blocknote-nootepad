import React from 'react';
import AsideNote from "./AsideNote";
import styled from "styled-components";


const StyledAsideList = styled.ol`
    display: grid;
    gap: 8px;
`;

function AsideList({ notes, setNotes }) {
    function noteBtnClickHandler(id) {
        const copy = [...notes];
        copy.map((note) => {
            note.isActive = note.id === id;
            return note;
        });
        setNotes(copy);
    }

    return <StyledAsideList>
        {notes.map(({ id, name, date }) => <AsideNote id={id} name={name} date={date} noteBtnClickHandler={noteBtnClickHandler}/>)}
    </StyledAsideList>
}

export default AsideList;