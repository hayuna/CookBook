import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { API_GET_DISHES } from '../../api';
import LoadingSpinner from '../utils/Loading';
import SearchBar from '../utils/SearchBar'
import DishElement from '../DishElement'
import Header from '../utils/Header';
import FloatingButton from '../utils/FloatingButton'

import { Redirect } from 'react-router-dom'

class DishesList extends Component {
    state = {
        dishes: [],
        loading: true,
        error: null,
        disableSearching: false,
        addingNewDish: false
    } 
 
    componentDidMount(){
        axios
            .get(API_GET_DISHES)
            .then(({ data }) => {
                this.setState({ 
                    dishes: data, 
                    loading: false 
                })
            })
            .catch(error => {
                this.setState({ 
                    loading: false,
                    error: error,
                })
                toast.error(this.state.error.message, {
                    onOpen: () => this.setState({ disableSearching: true }),
                    onClose: () => this.setState({ disableSearching: false })
                })
            })
    }

    handleChangeValue = term => {
        axios
        .get(API_GET_DISHES, {
            params: { term }
        })
        .then(({ data }) => {
            this.setState({ 
                dishes: data, 
                loading: false 
            })
        })
        .catch(error => {
            this.setState({ 
                loading: false,
                error: error,
            })
            toast.error(this.state.error.message, {
                onOpen: () => this.setState({ disableSearching: true }),
                onClose: () => this.setState({ disableSearching: false })
            })
        })
    }

    handleClickFloatingButton = () => {
        this.setState({addingNewDish: true})
    }
    
    render(){
        const { loading, error, dishes, addingNewDish } = this.state
        if(loading) return <LoadingSpinner />
        if(error) return <ToastContainer autoClose={1000} position={toast.POSITION.TOP_CENTER} />
        if(addingNewDish) return <Redirect to='/new' />
        return (
            <div>
                <Header />
                <SearchBar onChangeValue={this.handleChangeValue} />
                <div>
                    {dishes.map(i => <DishElement key={i.id} data={i} />)}                
                </div>
                <FloatingButton onClick={this.handleClickFloatingButton}/>
            </div>
        )
    }
}

export default DishesList