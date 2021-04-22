import styled from 'styled-components/macro'


export const Button = styled.button`
                width:7em;
                color:white;
                border:none;
                margin:0.5rem;
                font-size:1em;
                border-radius:0.5rem;
                padding:0.5rem;
                background-color:${props=>props.color};
                transition:1s;
           
                `;

export const Container = styled.div`
                display:flex;
                flex-directoin:row;
              `;