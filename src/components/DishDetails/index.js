import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { API_GET_DISHES } from '../../api'
import IngredientBadge from './IngredientBadge'
import DishImage from './DishImage'
import DishName from './DishName'
import DishDescription from './DishDescription'
import LoadingPizza from '../utils/LoadingPizza';
import Header from '../utils/Header'

const DishDetails = (props) => {
    const [loading, setLoading] = useState(true)
    const [dish, setDish] = useState({
        name: '',
        picture: '',
        ingredients: [],
        recipe: ''
    })

    const getDish = async () => {
        const id = props.match.params.dishId
        try {
            const result = await axios.get(`${API_GET_DISHES}/${id}`)
            setLoading(true)
            setDish(result.data)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(
        () => {
            getDish()
        }, []
    )

    const { name, picture, ingredients, recipe } = dish
    return (
        <div>
            <ToastContainer autoClose={1000} position={toast.POSITION.TOP_CENTER} />
            <Header redirect />
            {loading && <LoadingPizza />}
            <DishImage name={name} location={picture} />
            <DishName name={name} />
            {ingredients && ingredients.map(ingredient =>
                <IngredientBadge key={ingredient._id} name={ingredient.name} />
            )}
            <DishDescription>{recipe}</DishDescription>
        </div>
    )
}

export default DishDetails
