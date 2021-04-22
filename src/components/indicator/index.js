import React, { Component } from 'react';
import {Round, Inner, Text} from './styles/style'

const Indicator = ({visibility, ... restProps}) => {
    return (

        <Inner visibility={visibility}>
            <Text>Running</Text>
            <Round></Round>
        </Inner>
        
      );
}
 

export default Indicator;