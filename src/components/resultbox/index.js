import React, { Component, useState, useEffect } from 'react';
import {BorderBox, Title, Status, Image, TitleContainer} from './style/style'

const ResultBox = ({title,status,imageSource,content,...restProps}) => {

    const [state,setState] = useState("2");
    useEffect(()=>{
        setState(status)
    })
    const positioner =(loc)=>{

        switch(loc){
        case "1":
            return {x:"-35%", y:"50%"};
            break;
        case "2":
            return {x:"35%", y:"50%"};
            break;
        case "3":
            return {x:"-35%", y:"50%"};
            break;
        case "4":
            return {x:"-35%", y:"0"};
            break;
        case "5":
            return {x:"0", y:"25%"};
            break;
        default:
            return {x:0,y:0};
            break;
        }
    }

    return ( 
            <BorderBox content={content}>
                <TitleContainer>
                    <Title>
                        {title}
                    </Title>

                    <Status>
                        {status}
                    </Status>
                </TitleContainer>
                <Image src={imageSource} content={content} position={positioner(state)}></Image>
            </BorderBox>

     );
}
 
export default ResultBox;