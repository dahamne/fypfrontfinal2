import   styled  from 'styled-components/macro';

export const Round = styled.div`
width:1rem;
height:1rem;
border-radius:50%;
background-color:red;

-webkit-animation: blink-1 2s 0.5s infinite both;
animation: blink-1 2s 0.5s infinite both;

@-webkit-keyframes blink-1 {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }
  @keyframes blink-1 {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }

`;

export const Inner = styled.div`
visibility: ${props=>props.visibility?"visible":"hidden"};
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;


`;

export const Text = styled.h1`
    color:white;
    font-size:0.8rem;
    margin:1rem;


`;