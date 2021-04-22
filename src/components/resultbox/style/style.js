import styled from 'styled-components/macro'

export const BorderBox = styled.div`
background-image:url(${process.env.PUBLIC_URL + '/images/borderTech.png'});
width:500px;
height:500px;
background-size:cover;  
background-repeat: no-repeat;
background-position: center;
display:flex;
flex-direction:column;
align-items:center;




`;
export const TitleContainer = styled.div`
display:flex;
flex-direction:row;
width:100%;
padding-left:3.5rem;


`;

export const Title = styled.h1`
color:red;
margin-right:1rem;
font-size:2rem;
`;

export const Status =styled.h1`
color:white;
`;

export const Image = styled.img`
    width:300px;
    height:300px;
`;