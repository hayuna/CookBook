import styled from 'styled-components'
import image from './back.png'

export const BackButton = styled.span`
    align-self: flex-end;
    background-image: url(${image});
    background-repeat: no-repeat;
    width: 32px;
    height: 100%;
    position: absolute;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid white;
`
