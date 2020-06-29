import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from 'react-select'
import FloatingButton from '../../utils/FloatingButton'
import { API_GET_INGREDIENTS } from '../../../api';
import { Container, FullContainer, Label } from './style'
import t from '../../../translations/en.json'

const IngredientsSelect = ({ onChangeValue }) => {
    const [selectedOption, setSelectedOption] = useState(null)
    const [options, setOptions] = useState([])
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')

    const handleClickOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const changeIngredient = e => setName(e.target.value)
    const addNewIngredient = async () => {
        try {
            handleClose()
            const result = await axios.post(API_GET_INGREDIENTS, { name })
            result.data.value = result.data._id;
            result.data.label = result.data.name
            setOptions([...options, result.data])
            setSelectedOption([...(selectedOption || []), result.data])
        } catch (e) {
            console.error(e)
        }
    }

    const getIngredients = async () => {
        try {
            const result = await axios.get(API_GET_INGREDIENTS)
            const opts = result.data.map(d => { d.value = d._id; d.label = d.name; return d })
            setOptions(opts)
        } catch (error) {
            toast.error(error.message)

        }
    }

    useEffect(
        () => {
            getIngredients()
        }, []
    )

    const handleChange = selected => {
        setSelectedOption(selected)
        const ingredients = selected.map(option => option.value)
        onChangeValue(ingredients)
    }

    return (
        <FullContainer>
            <ToastContainer autoClose={1000} position={toast.POSITION.TOP_CENTER} />
            <Label>{t.chooseSomeIngredients}</Label>
            <Container>
                <Select
                    className='ingredientSelect'
                    clearableValue={false}
                    clearable={false}
                    backspaceRemovesValue={false}
                    placeholder={t.chooseIngredientPlaceholder}
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    isMulti
                />
                <div style={{ marginLeft: '10px' }}>
                    <FloatingButton icon='add' onClick={handleClickOpen} />
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">{t.addNewIngredient}</DialogTitle>
                        <DialogContent>
                            <TextField onChange={changeIngredient} autoFocus margin="dense" id="name" label={t.name} type="text" fullWidth />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">{t.cancel}</Button>
                            <Button onClick={addNewIngredient} color="primary">{t.add}</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Container>
        </FullContainer>
    )
}

export default IngredientsSelect
