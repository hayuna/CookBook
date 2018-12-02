import React, { Component } from 'react'
import { FloatingMenu, Container, Icon } from './style'

class FloatingButton extends Component{
	render() {
		return (
			<Container>
				<FloatingMenu>
                    <div onClick={() => this.props.onClick()}>
                        <Icon><i /></Icon>
                    </div>
				</FloatingMenu>
			</Container>
		)
	}
}

export default FloatingButton