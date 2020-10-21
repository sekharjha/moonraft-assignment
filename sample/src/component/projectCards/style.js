import styled from 'styled-components'

export const Card = styled.div`
    position: relative;
    width: 100%;
        &:hover .image{
            opacity:0.3;
        
 }   
 &:hover .middle{
            opacity:1;
}
`

export const Image = styled.img`
    opacity: 1;
    width: 100%;
    height: 100%;
    transition: .5s ease;
    backface-visibility: hidden;
`
export const Middle= styled.div`
transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
`
export const Text = styled.div`
    color: black;
    font-size: 16px;
    padding: 16px 32px;
  
`