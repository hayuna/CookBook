import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import './style.css';
import { BackButton, Container } from './style'

class Header extends Component{
    state = {
        redirect: false
    }

    redirectToHome = () => {
        this.setState({redirect: true})
    }

    render(){
        return(
            <Container>
                <h2 className='header'>{ 'CookBook' }</h2>
                {this.props.redirect 
                    ? <BackButton onClick={ this.redirectToHome }/>
                    : null
                }
                {this.state.redirect && <Redirect to='/dishes' />}
            </Container>
        )
    }
}

export default Header