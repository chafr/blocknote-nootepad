import React from 'react';
import AsideNote from "./AsideNote";


function AsideList({ notes, setNotes }) {
    function noteBtnClickHandler(id) {
        const copy = [...notes];
        copy.map((note) => {
            note.isActive = note.id === id;
            return note;
        });
        setNotes(copy);
    }

    return <ol className="notepad-aside-list">
        {notes.map(({ id, name, date }) => <AsideNote id={id} name={name} date={date} noteBtnClickHandler={noteBtnClickHandler}/>)}
    </ol>
}

export default AsideList;