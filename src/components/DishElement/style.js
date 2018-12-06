import styled from 'styled-components'

export const Thumb = styled.img`
    width:100px;
    height:100px;
    border-radius: 45px;
` 

export const Name = styled.span`
    color: white;
    font-size: 2rem;
    margin-left: 20px;
` 

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    & > a {
        display: flex;
        flex-direction: row;
        padding: 5px;
        align-items: center;
        text-decoration: none;
    }
`