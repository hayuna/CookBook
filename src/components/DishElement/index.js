import React from 'react'
import { Link } from 'react-router-dom'
import { Thumb, Name, Container } from './style'

const DishElement = ({ data }) => {
    const { id, name, picture } = data

    return (
        <Container>
            <Link to={`/dishes/${id}`}>
                <Thumb alt={name} src={picture} />
                <Name>{name}</Name>
            </Link>    
        </Container>
    )
}

export default DishElement
