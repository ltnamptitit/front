import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Slider from '../Slider/Slider';
import Product from './Product/Product';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
  margin-bottom: 20px;
`;
const TitleConTainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.2)
`;
const IconContainer = styled.div`
  margin: 0 8px;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
`;
const Link = styled.a`
  text-decoration: none;
  position: absolute;
  right: 8px;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${props => props.isHaveBanner && '8px 8px 8px 0'};
`;
const SliderContainer = styled.div`
  width: 340px;
  min-width: 340px;
  height: 660px;
  padding-right: 8px;
  display: block;
`;
const RightDirection = styled.div`
   position: absolute;
   display: none;
   height: 40px;
   width: 40px;
   border-radius: 50%;
   bottom: calc(50% - 20px);
   right: 0px;
   background-color: rgba(10,10,10, 0.2);
   z-index: 10;
   justify-content: center;
   align-items: center;
`;
const LeftDirection = styled.div`
   position: absolute;
   display: none;
   height: 40px;
   width: 40px;
   border-radius: 50%;
   bottom: calc(50% - 22px);
   left: 0px;
   background-color: rgba(10,10,10, 0.2);
   z-index: 10;
   justify-content: center;
   align-items: center;
`;
const ListProductContainer = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: ${props => props.isHaveBanner && '850px'};
  align-items: center;
  padding: ${props => !props.isHaveBanner && '0 4px'};
  position: relative;
  &:hover{
    ${RightDirection}{
        display: ${props => props.isHaveBanner && props.isShowRight && 'flex'};
    }
    ${LeftDirection}{
        display: ${props => props.isHaveBanner && props.isShowLeft && 'flex'};
    }
  }
`;
const ListProductWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;   
`;
const ListProduct = styled.div`
  height: 100%;
  width: 100%;
  padding: ${props => !props.isHaveBanner && '8px 0'};
  display: ${props => !props.isHaveBanner && 'grid'};
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  row-gap: ${props => !props.isHaveBanner && '8px'};
  flex-wrap: ${props => !props.isHaveBanner && 'wrap'};
  white-space: ${props => props.isHaveBanner && 'nowrap'};
  transform: translate(${props => props.current * -100 + '%'});
  transition: ${props => props.isHaveBanner && 'transform 0.4s ease 0s'};
`;
const ProductSet = styled.div`
  height: 100%;
  width: calc(100%  / 4);
  justify-content: space-between;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
`;
const ProductContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Box(props) {
    const [current, setCurrent] = useState(0);
    const splitArr = (arr, num) => {
        const newArr = []
        for (var i = 0; i < arr.length; i += num) {
            const chunk = [...arr].slice(i, i + num)
            newArr.push(chunk)
        }
        return newArr
    }
    const nextItem = () => {
        setCurrent(current + 1)
    }
    const prevItem = () => {
        setCurrent(current - 1)
    }
    console.log(props.banner)
    return (
        <Container>
            <TitleConTainer>
                <IconContainer>
                    {props.icon}
                </IconContainer>
                <Title>
                    {props.title}
                </Title>
                <Link href={props.link}>
                    Xem tất cả
                </Link>
            </TitleConTainer>
            <MainContent isHaveBanner={props.banner}>
                {
                    props.banner && <SliderContainer>
                        <Slider bannerArray={props.banner} />
                    </SliderContainer>
                }

                <ListProductContainer
                    isHaveBanner={props.banner}
                    isShowRight={splitArr(props.product, 2).length / 4 - current > 1 ? true : false}
                    isShowLeft={current > 0 ? true : false}
                >
                    <ListProductWrapper>
                        <ListProduct current={current} isHaveBanner={props.banner}>
                            {
                                props.banner ? splitArr(props.product, 2).map((item) => {
                                    return <ProductSet key={uuidv4()}>
                                        {
                                            item.map(pt => {
                                                return <Product item={pt} key={pt.id} />
                                            })
                                        }
                                    </ProductSet>
                                }) : props.product.map(item => {
                                    return <ProductContainer>
                                        <Product key={uuidv4()} item={item} />
                                    </ProductContainer>
                                })
                            }
                        </ListProduct>
                    </ListProductWrapper>
                    <RightDirection
                        onClick={() => nextItem()}
                    >
                        <RightOutlined />
                    </RightDirection>
                    <LeftDirection
                        onClick={() => prevItem()}
                    >
                        <LeftOutlined />
                    </LeftDirection>
                </ListProductContainer>
            </MainContent>
        </Container>
    )
}

export default Box

