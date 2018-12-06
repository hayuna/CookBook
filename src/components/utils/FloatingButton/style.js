import styled from 'styled-components'

export const FloatingMenu = styled.div`
	right: 8px;
	bottom: 8px;
	height: 42px;
	text-align: right;
`

export const Container = styled.div`
    position: relative;
    width: 100%;
`

export const Icon = styled.div`
    display: inline-block;
    width: 42px;
    height: 42px;
    line-height: 42px;
    vertical-align: middle;
    background: #e53935;
    border-radius: 50%;
    border: none;
    box-shadow: 0 2px 4px rgba(0,0,0,.2);
    text-align: center;
    font-size: 32px;
    color: #fff;
    vertical-align: middle;
`

export const IconSign = styled.i`
    :after {
        content: ${
            props => 
            props.symbol === 'add' 
            ? '\'\u002B\''
            : props.symbol === 'tick' 
            ? '\'\u2713\'' 
            : ''};
        color: ${props => props.symbol ? 'white' : 'blue'}
    }
`