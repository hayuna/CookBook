import React from 'react'
import './style.css'
import { Container, Label, Input } from './style.js'
import t from '../../../translations/en.json'

const DishName = ({ onChangeValue }) => {

    const handleChange = event => {
        onChangeValue(event.target.value)
    }

    return (
        <Container>
            <Label className="field a-field a-field_a1 page__field">
                <Input onChange={handleChange} className="field__input a-field__input" placeholder={t.dishNamePlaceholder} required />
                <span className="a-field__label-wrap">
                    <span className="a-field__label">{t.dishName}</span>
                </span>
            </Label>
        </Container>
    )
}

export default DishName
