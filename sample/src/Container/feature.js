import React from 'react'
import Cards from '../component/card'
import Card  from '../component/card/Card'

export default function FooterContainer() {
    return (
        <Cards>
            <Cards.Title>Featured Services</Cards.Title>
            <Cards.Wrapper>
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
            </Cards.Row>
            </Cards.Wrapper>
        </Cards>
    )
}