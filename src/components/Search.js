import React, {useState} from 'react';

function Search({ notes, setFilteredNotes }) {
    const [titleInputValue, setTitleInputValue] = useState('');
    if (titleInputValue === '') {
        setFilteredNotes(notes);
    }

    function titleInputChangeHandler(e) {
        const newValue = e.target.value;
        setTitleInputValue(newValue);
        if (newValue === '') {
            setFilteredNotes(notes);
            return;
        }
        
        const splitInWords = (text) => text.split(' ');
        const checkIntersection = (arr1, arr2) => arr1
            .map((item) => item.toLowerCase())
            .some((item) => arr2.includes(item.toLowerCase()));

        const filteredNotes = notes.filter(({ name }) => checkIntersection(splitInWords(newValue), splitInWords(name)));
        setFilteredNotes(filteredNotes);
    }
    
    return <div className="notepad-aside-search">
        Поиск
        <input type="text" value={titleInputValue} onChange={titleInputChangeHandler} placeholder="Имя"/>
    </div>
}

export default Search;