import React from 'react'
import Spinner from 'react-spinkit'

const LoadingSpinner = () => (
    <div className='async-status-wrapper'>
        <Spinner name='pacman' color='#0eabca' />
    </div>
)

export default LoadingSpinner;