import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Thumb, Name, Container } from './style'

class DishElement extends Component {
    render(){
        const { id, name, picture } = this.props.data

        return (
            <Container>
                <Link to={`/dishes/${id}`}>
                    <Thumb alt={name} src={picture} />
                    <Name>{name}</Name>
                </Link>    
            </Container>
        )
    }
}

export default DishElement
