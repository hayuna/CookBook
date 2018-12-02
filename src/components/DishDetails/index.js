import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { API_GET_DISHES } from '../../api'
import IngredientBadge from './IngredientBadge'
import DishImage from './DishImage'
import DishName from './DishName'
import DishDescription from './DishDescription'
import LoadingPizza from '../utils/LoadingPizza';
import Header from '../utils/Header'

class DishDetails extends Component {
    state = {
        loading: true,
        dish: {
            name: '', 
            picture: '', 
            ingredients: [], 
            recipe: ''
        },
    }

    componentDidMount(){
        const id = this.props.match.params.dishId
        axios
            .get(`${API_GET_DISHES}/${id}`)
            .then(({ data }) => {
                this.setState({ 
                    dish: data, 
                    loading: false 
                })
            })
            .catch(error => {
                this.setState({ loading: false })
                toast.error(error.message)
            })
    }

    render(){
        const { name, picture, ingredients, recipe } = this.state.dish
        const { loading } = this.state
        return (
            <div>
                <ToastContainer autoClose={1000} position={toast.POSITION.TOP_CENTER} />
                <Header redirect />
                {loading && <LoadingPizza />}
                <DishImage name={name} location={picture} />
                <DishName name={name} />
                {ingredients.map(ingredient => 
                    <IngredientBadge key={ingredient.id} name={ingredient.name}></IngredientBadge>
                )}
                <DishDescription>{recipe}</DishDescription>
            </div>
        )
    }
}

export default DishDetails