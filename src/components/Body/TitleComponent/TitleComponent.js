import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height:${props => props.height || '100%'};
  width: ${props => props.width || '100%'};
  display: flex;
  align-items: center;
`;
const Icon = styled.div`
  display: flex;
  height: 24px;
  width: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: linear-gradient(176deg,#8AABFF 10.39%,#133FDB 96%);
  margin-right: 8px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: block;
`;
function TitleComponent(props) {
    return (
        <Container height={props.height} width={props.width}>
            <Icon>{props.icon}</Icon>
            <Title>{props.title}</Title>
        </Container>
    )
}

export default TitleComponent