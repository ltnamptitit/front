import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: ${props => props.dimension || '100%'};
  width: ${props => props.dimension || '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

function Icon(props) {
    return (
        <Container dimension={props.dimension}>
            <StyledImage src={props.img} alt='icon' />
        </Container>
    )
}

export default Icon