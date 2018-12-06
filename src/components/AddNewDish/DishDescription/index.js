import React, { Component } from 'react'
import { Container, Label, TextArea } from './style'
import { DISH_DESCRIPTION } from '../../../texts'

class DishDescription extends Component{

    state = {
        value: ''
    }

    handleChange = e => {
        this.setState({value: e.target.value})
        this.props.onChangeValue(e.target.value)
    }

    render(){
        return(
            <Container>
                <Label>{DISH_DESCRIPTION}
                    <div>
                        <TextArea value={this.state.value} onChange={this.handleChange} />
                    </div>
                </Label>
            </Container>
        )
    }
}

export default DishDescription