import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { API_GET_DISHES } from '../../api';
import LoadingSpinner from '../utils/Loading';

class DishesList extends Component {
    state = {
        dishes: [],
        loading: true,
        error: null,
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
                    error: error 
                })
                toast.error(this.state.error.message, {
                    onOpen: () => this.setState({ disableSearching: true }),
                    onClose: () => this.setState({ disableSearching: false })
                })
            })
    }
    
    render(){
        const { loading, error, dishes } = this.state
        if(loading) return <LoadingSpinner />
        if(error) return <ToastContainer autoClose={1000} position={toast.POSITION.TOP_CENTER} />
        return (
            <div>
                <div>
                    {dishes.map(i => <span key={i.id}>{i.name}</span>)}                
                </div>
            </div>
        )
    }
}

export default DishesList