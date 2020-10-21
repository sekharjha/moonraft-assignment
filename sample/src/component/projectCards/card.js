import React, { Component } from 'react'
import Img from '../../Assets/Images/project-01.jpg'
import './style.css'
import {Card,Image} from './style'
export default class card extends Component {
    render() {
        return (
            <Card>
                <Image src={Img} className="image" style={{width:'100%'}}></Image>
               <div className="middle">
                   <div className="text"><h1>Hello</h1></div>
               </div>
            </Card>
        )
    }
}
