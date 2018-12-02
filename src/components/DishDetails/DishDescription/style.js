import styled from 'styled-components'

export const Recipe = styled.p`
    color: white;
    overflow-y: scroll;
    max-height: 500px;
    &::-webkit-scrollbar {
        width: 10px;
    }
`