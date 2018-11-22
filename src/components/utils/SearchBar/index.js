import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa';

import { Search, SearchInput } from './style'

class SearchBar extends Component {
    handleChange = e => {
        this.props.onChangeValue(e.target.value)
    }
    render() {
        return (
            <Search>
                <FaSearch style={{position: 'relative', top: 30, left: 10}} />
                <SearchInput 
                    placeholder={'Z jakich składników chcesz zrobić potrawę?'} 
                    value={this.props.filterText} 
                    onChange={this.handleChange}
                />
            </Search>
        );
    }
}

export default SearchBar