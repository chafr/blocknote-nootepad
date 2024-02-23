import React, {useState} from "react";

function Note({ note }) {
    console.log(note)

    return <>
        <input type="text" value={note.name} onChange={(e) => e.target.value}/>
        <textarea value={note.text} onChange={(e) => e.target.value}/>
    </>
}

export default Note;