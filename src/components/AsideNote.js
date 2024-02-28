import React from 'react';

function AsideNote({ id, name, date, noteBtnClickHandler }) {
    return <li key={id}>
        <button onClick={() => noteBtnClickHandler(id)}>{name}</button>
        <div>{date.toLocaleString()}</div>
    </li>
}

export default AsideNote;