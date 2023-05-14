import { LeftOutlined, RightOutlined, ThunderboltFilled } from '@ant-design/icons';
import React, { useState } from 'react'
import styled from 'styled-components'
import CountDown from '../Box/CountDown/CountDown';
import ProductFS from '../Box/Product/ProductFS';
import { v4 as uuidv4 } from 'uuid'



const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 16px;
`;

const TitleContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 8px;
  border-bottom: 1px solid rgba(0,0,0,0.2);
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #c75520;
  margin-left: 6px;
`;

const Link = styled.a`
  text-decoration: none;
  position: absolute;
  right: 8px;
`;

const LeftArrow = styled.div`
  display: none;
  border: none;
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  right: calc(100% - 20px - 8px);
  bottom: calc(50% - 20px);
  background-color: rgba(10,10,10, 0.2);
`;

const RightArrow = styled.div`
  display: none;
  border: none;
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  left: calc(100% - 20px - 8px);
  bottom: calc(50% - 20px);
  background-color: rgba(10,10,10, 0.2);
`;

const ListProductContainer = styled.div`
  width: 100%;
  padding: 8px 0;
  position: relative;
  &:hover{
    ${LeftArrow}{
        display: ${props => props.current > 0 && 'flex'};
    }
    ${RightArrow}{
        display: ${props => props.current < 2 && 'flex'}
    }
  }
`;

const ListProductWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const ListProduct = styled.div`
  height: 100%;
  width: calc(100% * 16 / 6);
  display: flex;
  flex-direction: row;
  transform: translate(${props => props.current * - 100 * 6 / 16 + '%'});
  transition: transform 0.4s ease 0s;
`;

const ProductWrapper = styled.div`
  height: 100%;
  width: calc(300% / 16);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function FlashSale(props) {
    const [current, setCurrent] = useState(0);

    const handleClickLeft = () => {
        setCurrent(current - 1)
        console.log(current)
    }

    const handleClickRight = () => {
        setCurrent(current + 1)
        console.log(current)
    }

    return (
        <Container>
            <TitleContainer>
                <ThunderboltFilled style={{ fontSize: '20px', color: '#c75520' }} />
                <Title>Flash Sale</Title>
                <CountDown />
                <Link href={props.link}>
                    Xem tất cả
                </Link>
            </TitleContainer>
            <ListProductContainer
                current={current}
            >
                <ListProductWrapper>
                    <ListProduct
                        current={current}
                    >
                        {
                            props.product.map(item => {
                                return <ProductWrapper key={uuidv4()}>
                                    <ProductFS item={item} />
                                </ProductWrapper>
                            })
                        }
                    </ListProduct>
                </ListProductWrapper>
                <LeftArrow
                    onClick={() => handleClickLeft()}
                >
                    <LeftOutlined />
                </LeftArrow>
                <RightArrow
                    onClick={() => handleClickRight()}
                >
                    <RightOutlined />
                </RightArrow>
            </ListProductContainer>
        </Container>
    )
}

export default FlashSale
