import React from 'react'
import { Image } from './style'

const DishImage = ({ name, location }) => <Image alt={name} src={location} />

export default DishImage