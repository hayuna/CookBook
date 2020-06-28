import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_GET_DISHES } from '../../api';
import LoadingPizza from '../utils/LoadingPizza'
import SearchBar from '../utils/SearchBar'
import DishElement from '../DishElement'
import Header from '../utils/Header';
import FloatingButton from '../utils/FloatingButton'

const ScrollableContainer = styled.div`
    overflow-y: scroll;
    height: 500px;
    &::-webkit-scrollbar {
        width: 10px;
    }
`

const DishesList = () => {
    const [dishes, setDishes] = useState([])
    const [loading, setLoading] = useState(true)
    const [addingNewDish, setAddingNewDish] = useState(false)

    const getDishes = async () => {
        try {
            const result = await axios.get(API_GET_DISHES)
            setDishes(result.data)
            setLoading(false)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    const getDish = async (term) => {
        try {
            const result = await axios.get(API_GET_DISHES, {
                params: { term }
            })
            setDishes(result.data)
            setLoading(false)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(
        () => {
            getDishes()
        }, []
    )

    return (
        <div>
            {addingNewDish && <Redirect to='/new' />}
            <ToastContainer autoClose={1000} position={toast.POSITION.TOP_CENTER} />
            <Header />
            <SearchBar onChangeValue={getDish} />
            <ScrollableContainer>
                {loading && <LoadingPizza />}
                {dishes.map(i => <DishElement key={i._id} data={i} />)}
            </ScrollableContainer>
            <FloatingButton icon='add' onClick={() => setAddingNewDish(true)} />
        </div>
    )
}

export default DishesList
