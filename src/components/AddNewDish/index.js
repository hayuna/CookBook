import React, { Component } from 'react'
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
import { UPLOAD_DISH_PHOTO, TYPE_DISH_NAME, TYPE_DISH_DESCRIPTION, CHOOSE_SOME_INGREDIENTS, ADDED_NEW_DISH } from '../../texts'

class AddNewDish extends Component{

    state = {
        image: '',
        name: '',
        description: '',
        ingredients: [],
        added: false,
    }
    
    handleFileChosen = image => this.setState({ image })
    handleName = name => this.setState({ name })
    handleDescription = description => this.setState({ description })
    handleIngredientChosen = ingredients => this.setState({ ingredients })
    addDish = () => {
        const errors = this.validate()
        if(errors.length !== 0){
            errors.map(error => {
                toast.error(error, {
                    autoClose: 3000,
                })
                return null;
            })            
        }else{
            const { name, description, image, ingredients } = this.state
            axios
            .post(API_GET_DISHES, {
                "name": name,
                "picture": image,
                "recipe": description,
                "ingredientIds": ingredients
            })
            .then(() => {
                toast.success(ADDED_NEW_DISH, {
                    onClose: () => this.setState({ added: true })
                })
            })
            .catch(error => {
                toast.error(error.message)
            })
        }
    }

    validate = () => {
        const { image, name, description, ingredients } = this.state
        let listOfErrors = []
        if(image.length === 0) listOfErrors.push(UPLOAD_DISH_PHOTO)
        if(name.length === 0) listOfErrors.push(TYPE_DISH_NAME)
        if(description.length === 0) listOfErrors.push(TYPE_DISH_DESCRIPTION)
        if(ingredients.length === 0) listOfErrors.push(CHOOSE_SOME_INGREDIENTS)
        return listOfErrors
    }

    render(){
        const { added } = this.state
        if(added) return <Redirect to='/dishes' />
        return(
            <div>
                <ToastContainer autoClose={1000} position={toast.POSITION.TOP_CENTER} />
                <Header redirect />
                <div className="upperContainer" style={{marginTop: '20px'}}>
                    <UploadImage onFileChosen={ this.handleFileChosen } />
                    <DishName onChangeValue={ this.handleName } />
                </div>
                <IngredientsSelect onChangeValue={ this.handleIngredientChosen } />
                <DishDescription onChangeValue={ this.handleDescription } />
                <FloatingButton icon='tick' onClick={this.addDish} />
            </div>
        )
    }
}

export default AddNewDish