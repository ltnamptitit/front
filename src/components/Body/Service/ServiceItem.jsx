import React from 'react'
import styled from 'styled-components'

const Container = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 12px 0;
`;
const ImageWrapper = styled.div`
  height: ${props => props.size};
  width: ${props => props.size};
  margin-right: 8px;
`;
const Image = styled.img`
  height: 100%;
  width:  100%;
  object-fit: contain;
`;
const Content = styled.div`
  display: block;
  color: #595959;
  font-size: 14px;
  font-weight: 500;
`;

function ServiceItem(props) {
    return (
        <Container href={props.link}>
            <ImageWrapper size={props.size}>
                <Image src={props.src} />
            </ImageWrapper>
            <Content>{props.content}</Content>
        </Container>
    )
}

export default ServiceItem