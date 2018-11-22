import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { API_GET_DISHES } from '../../api';
import LoadingSpinner from '../utils/Loading';
import SearchBar from '../utils/SearchBar'

class DishesList extends Component {
    state = {
        dishes: [],
        loading: true,
        error: null,
        disableSearching: false,
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

    handleChangeValue = e => {
        //TODO implement searching
        console.log(e)
    }
    
    render(){
        const { loading, error, dishes } = this.state
        if(loading) return <LoadingSpinner />
        if(error) return <ToastContainer autoClose={1000} position={toast.POSITION.TOP_CENTER} />
        return (
            <div>
                <SearchBar onChangeValue={this.handleChangeValue} />
                <div>
                    {dishes.map(i => <span key={i.id}>{i.name}</span>)}                
                </div>
            </div>
        )
    }
}

export default DishesList