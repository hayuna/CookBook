import React, { Component } from 'react'
import axios from 'axios'

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
                console.log('error')
                this.setState({ 
                    loading: false,
                    error: error 
                })
            })
    }
    
    render(){
        const { loading, error, dishes } = this.state
        if(loading) return <LoadingSpinner />
        if(error) return <span>error! {error.message}</span>
        if(error) return (
            <span>error! {error.message}</span>
        )
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