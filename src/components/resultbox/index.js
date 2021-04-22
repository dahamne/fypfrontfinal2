import React, { Component } from 'react';
import {BorderBox, Title, Status, Image, TitleContainer} from './style/style'

const ResultBox = ({title,status,imageSource, ...restProps}) => {
    return ( 
            <BorderBox>
                <TitleContainer>
                    <Title>
                        {title}
                    </Title>

                    <Status>
                        {status}
                    </Status>
                </TitleContainer>
                <Image src={imageSource}></Image>
            </BorderBox>

     );
}
 
export default ResultBox;