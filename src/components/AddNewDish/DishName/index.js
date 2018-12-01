import React, { Component } from 'react'
import './style.css'
import { Container, Label, Input } from './style.js'

class DishName extends Component{
    
    handleChange = event => {
        this.props.onChangeValue(event.target.value)
    }
    
    render(){
        return(
            <Container>
                <Label className="field a-field a-field_a1 page__field">
                    <Input onChange={this.handleChange} className="field__input a-field__input" placeholder="e.g. Cake" required />
                    <span className="a-field__label-wrap">
                        <span className="a-field__label">Dish name</span>
                    </span>
                </Label>
            </Container>
        )
    }
}

export default DishName