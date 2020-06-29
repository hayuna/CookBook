import React, { useState } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../utils/Header'
import DishDescription from './DishDescription';
import DishName from './DishName';
import UploadImage from './UploadImage';
import IngredientsSelect from './IngredientsSelect';
import FloatingButton from '../utils/FloatingButton';
import { API_GET_DISHES, API_UPLOAD } from '../../api';
import t from '../../translations/en.json'

const AddNewDish = () => {
    const [picture, setPicture] = useState('')
    const [name, setName] = useState('')
    const [recipe, setRecipe] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [added, setAdded] = useState(false)

    const handleFileChosen = image => setPicture(image)
    const handleName = name => setName(name)
    const handleRecipe = recipe => setRecipe(recipe)
    const handleIngredientChosen = ingredients => setIngredients(ingredients)
    const addDish = async () => {
        console.log(ingredients)
        const errors = validate()
        if (errors.length !== 0) {
            errors.map(error => {
                toast.error(error, {
                    autoClose: 3000,
                })
                return null;
            })
        } else {
            try {
                const { data: pictureURL } = await axios.post(API_UPLOAD, { file: picture })
                await axios.post(API_GET_DISHES, {
                    name,
                    picture: pictureURL,
                    recipe,
                    ingredients
                })
                toast.success(t.addedNewDish, {
                    onClose: () => setAdded(true)
                })
            } catch (error) {
                toast.error(error.message)
            }
        }
    }

    const validate = () => {
        const listOfErrors = []
        if (picture.length === 0) listOfErrors.push(t.uploadDishPhoto)
        if (name.length === 0) listOfErrors.push(t.typeDishName)
        if (recipe.length === 0) listOfErrors.push(t.typeDishDescription)
        if (ingredients.length === 0) listOfErrors.push(t.chooseSomeIngredientsAlert)
        return listOfErrors
    }

    return (
        <div>
            {added && <Redirect to='/dishes' />}
            <ToastContainer autoClose={1000} position={toast.POSITION.TOP_CENTER} />
            <Header redirect />
            <div className="upperContainer" style={{ marginTop: '20px' }}>
                <UploadImage onFileChosen={handleFileChosen} />
                <DishName onChangeValue={handleName} />
            </div>
            <IngredientsSelect onChangeValue={handleIngredientChosen} />
            <DishDescription onChangeValue={handleRecipe} />
            <FloatingButton icon='tick' onClick={addDish} />
        </div>
    )
}

export default AddNewDish
