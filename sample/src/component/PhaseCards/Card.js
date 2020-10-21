import React, { Component } from 'react'
import {Card, Icon, IconHeader} from './style'
import { IconBox } from './style'
import {faLightbulb} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class Cards extends Component {
    render() {
        return (
           <Card>
               <IconBox>
                   <Icon>
                    <FontAwesomeIcon icon = {faLightbulb}></FontAwesomeIcon>
                   </Icon>
                   <IconHeader>Customer Idea</IconHeader>
                   <p>Dapibus nunc efficitur at. Quisque elementum magna quis ante suscipit, quis fermentum augue viverra.</p>
               </IconBox>
           </Card>
        )
    }
}
