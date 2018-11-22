import React, { Component } from 'react'
import axios from 'axios'

class DishesList extends Component {
    state = {
        dishes: [],
    } 
 
    componentDidMount(){
        axios
            .get('https://cookbook-koszalin.herokuapp.com/dishes')
            .then(({ data }) => {
                this.setState({ dishes: data })
            })
            .catch(error => {
                console.log('error')
            })
    }
    
    render(){
        const { dishes } = this.state
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