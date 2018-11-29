import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa';

import { Search, SearchInput } from './style'

class SearchBar extends Component {
    state = {
        typing: false,
        typingTimeout: 0,
        timeout: 300
    }

    handleChange = event => {
        const { timeout, typingTimeout } = this.state
        const { onChangeValue } = this.props 

        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }
        const text = event.target.value
        this.setState({
            typing: false,
            typingTimeout: setTimeout(() => {
                onChangeValue(text)
            }, timeout)
        });
    }

    render() {
        return (
            <Search>
                <FaSearch style={{position: 'relative', top: 30, left: 10}} />
                <SearchInput 
                    placeholder={'Z jakich składników chcesz zrobić potrawę?'} 
                    onChange={this.handleChange}
                />
            </Search>
        );
    }
}

export default SearchBar