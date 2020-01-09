import React, { useState } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../utils/Header'
import DishDescription from './DishDescription';
import DishName from './DishName';
import UploadImage from './UploadImage';
import IngredientsSelect from './IngredientsSelect';
import FloatingButton from '../utils/FloatingButton';
import { API_GET_DISHES } from '../../api';
import { UPLOAD_DISH_PHOTO, TYPE_DISH_NAME, TYPE_DISH_DESCRIPTION, CHOOSE_SOME_INGREDIENTS_ALERT, ADDED_NEW_DISH } from '../../texts'

const AddNewDish = () => {
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [added, setAdded] = useState(false)
    
    const handleFileChosen = image => setImage(image)
    const handleName = name => setName(name)
    const handleDescription = description => setDescription(description)
    const handleIngredientChosen = ingredients => setIngredients(ingredients)
    const addDish = async () => {
        const errors = validate()
        if(errors.length !== 0){
            errors.map(error => {
                toast.error(error, {
                    autoClose: 3000,
                })
                return null;
            })            
        } else {
            try {
                await axios.post(API_GET_DISHES, {
                    name,
                    picture: image,
                    recipe: description,
                    ingredientIds: ingredients
                })
                toast.success(ADDED_NEW_DISH, {
                    onClose: () => setAdded(true)
                })
            } catch(error) {
                toast.error(error.message)
            }
        }
    }

    const validate = () => {
        const listOfErrors = []
        if(image.length === 0) listOfErrors.push(UPLOAD_DISH_PHOTO)
        if(name.length === 0) listOfErrors.push(TYPE_DISH_NAME)
        if(description.length === 0) listOfErrors.push(TYPE_DISH_DESCRIPTION)
        if(ingredients.length === 0) listOfErrors.push(CHOOSE_SOME_INGREDIENTS_ALERT)
        return listOfErrors
    }

    return(
        <div>
            { added && <Redirect to='/dishes' /> }
            <ToastContainer autoClose={1000} position={toast.POSITION.TOP_CENTER} />
            <Header redirect />
            <div className="upperContainer" style={{marginTop: '20px'}}>
                <UploadImage onFileChosen={ handleFileChosen } />
                <DishName onChangeValue={ handleName } />
            </div>
            <IngredientsSelect onChangeValue={ handleIngredientChosen } />
            <DishDescription onChangeValue={ handleDescription } />
            <FloatingButton icon='tick' onClick={addDish} />
        </div>
    )
}

export default AddNewDish
