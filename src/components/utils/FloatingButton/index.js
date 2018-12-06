import React, { Component } from 'react'
import { FloatingMenu, Container, Icon, IconSign } from './style'

class FloatingButton extends Component{
	state = {
		symbol: ''
	}
	componentDidMount(){
		const { icon } = this.props
		this.setState({symbol: icon})
	}
	render() {
		return (
			<Container>
				<FloatingMenu>
                    <div onClick={() => this.props.onClick()}>
						<Icon><IconSign symbol={this.state.symbol} /></Icon>
                    </div>
				</FloatingMenu>
			</Container>
		)
	}
}

export default FloatingButton