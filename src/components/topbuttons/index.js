import React, { Component } from 'react';
import {Button,Container} from './style/style'

const TopButton = ({children,color, clickhandle, ... restProps}) => {
    return ( <Button color={color} onClick={clickhandle}>{children}</Button> );
}

TopButton.Container = ({children})=>{
    return (<Container>{children}</Container>)
}
 
export default TopButton;

