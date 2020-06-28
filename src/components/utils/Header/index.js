import React, { useState } from 'react';
import { Redirect } from 'react-router';

import './style.css';
import { BackButton, Container } from './style';
import t from '../../../translations/en.json'

const Header = ({ redirect }) => {
    const [isRedirect, setRedirect] = useState(false);

    const redirectToHome = () => {
        setRedirect(true);
    }

    return (
        <Container>
            <h2 className='header'>{t.appName}</h2>
            {redirect && <BackButton onClick={redirectToHome} />}
            {isRedirect && <Redirect to='/dishes' />}
        </Container>
    )
}

export default Header
