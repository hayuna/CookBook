import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
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

class DishesList extends Component {
    state = {
        dishes: [],
        loading: true,
        disableSearching: false,
        addingNewDish: false
    } 
 
    componentDidMount(){
        axios
            .get(API_GET_DISHES)
            .then(({ data }) => {
                this.setState({ dishes: data, loading: false })
            })
            .catch(error => {
                this.setState({ loading: false })
                toast.error(error.message, {
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
            this.setState({ dishes: data, loading: false })
        })
        .catch(error => {
            this.setState({ loading: false })
            toast.error(error.message, {
                onOpen: () => this.setState({ disableSearching: true }),
                onClose: () => this.setState({ disableSearching: false })
            })
        })
    }

    handleClickFloatingButton = () => this.setState({addingNewDish: true})
    
    render(){
        const { loading, dishes, addingNewDish } = this.state
        if(addingNewDish) return <Redirect to='/new' />
        return (
            <div>
                <ToastContainer autoClose={1000} position={toast.POSITION.TOP_CENTER} />
                <Header />
                <SearchBar onChangeValue={this.handleChangeValue} />
                <ScrollableContainer>
                    {loading && <LoadingPizza />}
                    {dishes.map(i => <DishElement key={i.id} data={i} />)}                
                </ScrollableContainer>
                <FloatingButton icon='add' onClick={this.handleClickFloatingButton}/>
            </div>
        )
    }
}

export default DishesList