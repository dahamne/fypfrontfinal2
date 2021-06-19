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

    width:${props=>
    
        {
            if (props.content==2) {
                return "400px"
            }

            else if (props.content==3){
                return "80px"
            }

            else{
                return "300px"
            }
        }
    
    };
   

    
    height:${props=>
    
        {
            if (props.content==2) {
                return "300px"
            }

            else if (props.content==3){
                return "80px"
            }

            else{
                return "300px"
            }
        }
    
    };


    mix-blend-mode:${props=>props.content==1 ? "normal":"screen"} ;
    position:${props=>props.content==3? "relative":"static"};
    left:${props=>props.position.x};
    top:${props=>props.position.y};
`;

