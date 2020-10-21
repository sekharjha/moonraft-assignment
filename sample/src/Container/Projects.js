import React, { Component } from 'react'
import Cards from '../component/projectCards'
import Card from '../component/projectCards/card'
export default class Projects extends Component {
    render() {
        return (
            <Cards>
                <Cards.Title>Our Latest Projects</Cards.Title>
                <Cards.Row>
                    <Cards.Column>
                        <Card></Card>
                    </Cards.Column>
                    <Cards.Column>
                        <Card></Card>
                    </Cards.Column>
                    <Cards.Column>
                        <Card></Card>
                    </Cards.Column>
                    <Cards.Column>
                        <Card></Card>
                     </Cards.Column>
                    <Cards.Column>
                        <Card></Card>
                    </Cards.Column>
                    <Cards.Column>
                        <Card></Card>
                    </Cards.Column>
                    <Cards.Column>
                        <Card></Card>
                    </Cards.Column>
                    <Cards.Column>
                        <Card></Card>
                    </Cards.Column>
                    </Cards.Row>
            </Cards>
        )
    }
}
