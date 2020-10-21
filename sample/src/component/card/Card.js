import React, { Component } from 'react'
import {CardBody,CardElement,CardContent,Icon} from './style'
export default class Card extends Component {
    render() {
        return (
            <CardBody>
					<CardContent>
						<CardElement>
							<Icon className="fa fa-user-o"></Icon>
							<h4>UX Experience </h4>
							<p>Mauris tempus a lacus nec sollicitudin duieu nec porttitor.</p>
						</CardElement>
					</CardContent>
				</CardBody>
        )
    }
}
