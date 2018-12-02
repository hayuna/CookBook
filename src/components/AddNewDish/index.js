import React, { Component } from 'react'

import Header from '../utils/Header'
import DishDescription from './DishDescription';
import DishName from './DishName';
import UploadImage from './UploadImage';
import IngredientsSelect from './IngredientsSelect';
import FloatingButton from '../utils/FloatingButton';
import axios from 'axios';
import { API_GET_DISHES } from '../../api';
import { UPLOAD_DISH_PHOTO, TYPE_DISH_NAME, TYPE_DISH_DESCRIPTION, CHOOSE_SOME_INGREDIENTS } from '../../texts'

class AddNewDish extends Component{

    state = {
        image: '',
        name: '',
        description: '',
        ingredients: [],
    }
    
    handleFileChosen = image => {
        this.setState({ image })
    }

    handleName = name => {
        this.setState({ name })
    }

    handleDescription = description => {
        this.setState({ description })
        console.log(this.state)
    }

    handleIngredientChosen = ingredients => {
        this.setState({ ingredients })
    }

    addDish = () => {
        const errors = this.validate()
        if(errors.length !== 0){
            console.log(errors)
            //TODO ERROR ALERT
        }else{
            const { name, description, image, ingredients } = this.state
            axios
            .post(API_GET_DISHES, {
                "name": name,
                "picture": image,
                "recipe": description,
                "ingredientIds": ingredients
            })
            .catch(error => {
                console.log(error)
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
        return(
            <div>
                <Header redirect />
                <div className="upperContainer" style={{marginTop: '20px'}}>
                    <UploadImage onFileChosen={ this.handleFileChosen } />
                    <DishName onChangeValue={ this.handleName } />
                </div>
                <IngredientsSelect onChangeValue={ this.handleIngredientChosen } />
                <DishDescription onChangeValue={ this.handleDescription } />
                <FloatingButton onClick={this.addDish} />
            </div>
        )
    }
}

export default AddNewDish