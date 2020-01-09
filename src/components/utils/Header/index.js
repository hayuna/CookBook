import React, { useState } from 'react';
import { Redirect } from 'react-router';

import './style.css';
import { BackButton, Container } from './style';
import { APP_NAME } from '../../../texts';

const Header = ({ redirect }) => {
    const [isRedirect, setRedirect] = useState(false);

    const redirectToHome = () => {
        setRedirect(true);
    }

    return (
        <Container>
            <h2 className='header'>{APP_NAME}</h2>
            {redirect && <BackButton onClick={redirectToHome} />}
            {isRedirect && <Redirect to='/dishes' />}
        </Container>
    )
}

export default Header
