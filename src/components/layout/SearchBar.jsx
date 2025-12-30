import {useState, useEffect} from 'react';

const [inputValue, setInputValue] = useState('');

useEffect(() => {
    const delayDebounce = setTimeout(() => {
        if(inputValue){
            onSearch(inputValue);
        }
    }, 500);

    return () => clearTimeout(delayDebounce);
}, [inputValue]);