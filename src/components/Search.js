import React, {useState} from 'react';

function Search({ notes, setFilteredNotes }) {
    const [inputValue, setInputValue] = useState('');
    if (inputValue === '') {
        setFilteredNotes(notes);
    }

    function titleInputChangeHandler(e) {
        const newValue = e.target.value;
        setInputValue(newValue);
        if (newValue === '') {
            setFilteredNotes(notes);
            return;
        }
        
        const splitInWords = (text) => text.split(' ');
        const checkIntersection = (arr1, arr2) => arr1
            .map((item) => item.toLowerCase())
            .some((item) => arr2.includes(item.toLowerCase()));

        const filteredNotes = notes.filter(({ name, text }) => checkIntersection(
            splitInWords(newValue), [...splitInWords(name), ...splitInWords(text)]
        ));
        setFilteredNotes(filteredNotes);
    }
    
    return <div className="notepad-aside-search">
        Поиск
        <input type="text" value={inputValue} onChange={titleInputChangeHandler} placeholder="Имя и/или описание"/>
    </div>
}

export default Search;