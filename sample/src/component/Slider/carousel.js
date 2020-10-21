import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import one from '../../Assets/slide-01.jpg'
import two from '../../Assets/slide-03.jpg' 
import {StyledDiv} from './style'
class CarouselComponent extends Component {
  state = {
    items: [
      {id: 1, url: one},
      {id: 2, url: two},
    ]
  }
 
  render () {
    const { items } = this.state;
    return (
      <Carousel>
        {items.map(item => <StyledDiv key={item.id}><img src={item.url}></img></StyledDiv>)}
      </Carousel>
    )
  }
}

export default CarouselComponent;