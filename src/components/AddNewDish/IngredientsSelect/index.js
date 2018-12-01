import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from 'react-select'
import axios from 'axios'
import { API_GET_INGREDIENTS } from '../../../api';
import { Container, FullContainer, Label } from './style'

const ButtonStyle = {
    padding: '5px',
    fontWeight: 'bold',
    color: 'white'
}

class IngredientsSelect extends Component{
    state = {
        selectedOption: null,
        options: [],
        open: false,
        name: ''
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    changeIngredient = e => {
        this.setState({ name: e.target.value })
    }

    addNewIngredient = () => {
        this.setState({ open: false });
        axios
        .post(API_GET_INGREDIENTS, {name: this.state.name})
        .then(({ data }) => {
            data.value = data.id; 
            data.label = data.name
            this.setState({ options: [...this.state.options, data] })
            this.setState({ selectedOption: [ ...this.state.selectedOption, data ] })
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    componentDidMount(){
        axios
        .get(API_GET_INGREDIENTS)
        .then(({ data }) => {
            const options = data.map(d => { d.value = d.id; d.label = d.name; return d })
            this.setState({ options })
        })
        .catch(error => {
            console.log(error)
        })
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        const ingredients = selectedOption.map(option => option.value)
        this.props.onChangeValue(ingredients)
    }
    
    render(){
        const { selectedOption, options } = this.state;
        return (
            <FullContainer>
                <Label>Choose some ingredients</Label>
                <Container>
                    <Select value={selectedOption} onChange={this.handleChange} options={options} isMulti/>
                    <div>
                        <Button style={ButtonStyle} onClick={this.handleClickOpen}>+</Button>
                        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Add New Ingredient</DialogTitle>
                            <DialogContent>
                                <TextField onChange={this.changeIngredient} autoFocus margin="dense" id="name" label="Name" type="text" fullWidth/>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">Cancel</Button>
                                <Button onClick={this.addNewIngredient} color="primary">Add</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </Container>
            </FullContainer>
        )
    }
}

export default IngredientsSelect