import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { Search, SearchInput } from './style'
import t from '../../../translations/en.json'


const SearchBar = ({ onChangeValue }) => {
    const [typingTimeout, setTypingTimeout] = useState(0);

    const handleChange = event => {
        if (typingTimeout) clearTimeout(typingTimeout);
        const text = event.target.value
        setTypingTimeout(setTimeout(() => {
            onChangeValue(text)
        }, 300))
    }

    const IconStyle = {
        position: 'relative',
        top: 30,
        left: 10
    }

    return (
        <Search>
            <FaSearch style={IconStyle} />
            <SearchInput placeholder={t.searchbarPlaceholder} onChange={handleChange} />
        </Search>
    );
}

export default SearchBar
