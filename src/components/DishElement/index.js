import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Thumb from './style'

class DishElement extends Component {
    render(){
        const { id, name, picture } = this.props.data

        return (
            <div>
                <Link to={`/dishes/${id}`}>
                    <Thumb alt={name} src={picture} />
                    <span>{name}</span>
                </Link>    
            </div>
        )
    }
}

export default DishElement
