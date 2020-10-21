import styled from 'styled-components'

export const CardBody = styled.div`
    flex: 1;
    margin: 15px;
    background-color: #eeeeee;
    width:100%;
    height:100px;
    padding: 40px;
    &:hover {
      background-color:#44B272;
      transition: 200ms ease-in;
      color:white;
  }

`
export const CardContent = styled.div`
    display: table;
    height: 100%;
    padding-left: 105px;
    position: relative;
    z-index: 20;
`
export const CardElement = styled.div`
    display: table-cell;
    vertical-align: middle;
`
export const Icon = styled.i`
    font-size: 72px;
    color: #666;
    line-height: 95px;
    position: absolute;
    left: 0;
`