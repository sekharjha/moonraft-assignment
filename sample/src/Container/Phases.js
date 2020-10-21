import React from 'react'
import Cards  from '../component/PhaseCards'
import Card from '../component/PhaseCards/Card'
export default function Phases() {
    return (
        <Cards>
            <Cards.Wrapper>
            <Cards.Title>Phases Of Project Management</Cards.Title>
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
            </Cards.Row>
            </Cards.Wrapper>
        </Cards>
    )
}