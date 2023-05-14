import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  &:hover{
    color: rgba(255,255,255,0.6);
  }
`

export const IconWrapper = styled.div`
  position: relative;
  margin-right: 8px;
`

export const Bagde = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: rgb(255,0,0);
  display: ${props => props.isShow ? 'flex' : 'none'};
  position: absolute;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  top: -10px;
  right: -10px;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-end;
`;


function IconWithNotification(props) {
    return (
        <Container>
            <IconWrapper>
                {props.icon}
                <Bagde isShow={props.notify}>
                    {props.notify}
                </Bagde>
            </IconWrapper>
            <Content>
                {props.content}
            </Content>
        </Container>
    )
}

export default IconWithNotification
