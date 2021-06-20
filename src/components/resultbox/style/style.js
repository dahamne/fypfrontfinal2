import styled from 'styled-components/macro'

export const BorderBox = styled.div`
background-image:url(${props=>props.content==3?process.env.PUBLIC_URL + '/images/borderTech2.png':process.env.PUBLIC_URL + '/images/borderTech.png'});
width:30vw;
height:30vw;
background-size:cover;  
background-repeat: no-repeat;
background-position: center;
display:flex;
flex-direction:column;
align-items:center;
@media(max-width:800px){
    width:60vw;
    height:60vw;
}




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
font-size:1.5rem;
`;

export const Status =styled.h1`
color:white;
font-size:1.5rem;
`;

export const Image = styled.img`

    width:${props=>
    
        {
            if (props.content==2) {
                return "70%"
            }

            else if (props.content==3){
                return "20%"
            }

            else{
                return "70%"
            }
        }
    
    };
   

    
    height:${props=>
    
        {
            if (props.content==2) {
                return "70%px"
            }

            else if (props.content==3){
                return "20%"
            }

            else{
                return "70%"
            }
        }
    
    };


    mix-blend-mode:${props=>props.content==1 ? "normal":"screen"} ;
    position:${props=>props.content==3? "relative":"static"};
    left:${props=>props.position.x};
    top:${props=>props.position.y};
`;
