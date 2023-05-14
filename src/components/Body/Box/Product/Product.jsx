import React from 'react'
import StarRatings from 'react-star-ratings';
import styled from 'styled-components'

import discountImg from '../../../../assets/label-giam-gia.png'


const Container = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 320px;
  width: 190px;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 4px;
  &:hover{
    transition: transform linear 0.1s;
    border: 1px solid rgba(0,0,0,0.75);
  }
`;
const Discount = styled.div`
  display: ${props => props.isDisplay ? 'block' : 'none'};
  position: absolute;
  top: 0;
  right: 10%;
  height: 40px;
  width: 40px;
  background-image: url(${discountImg});
  background-size: contain;
  z-index: 2;
  text-align: center;
  color: red;
  font-weight: 700;
  justify-content: center;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 165px;
  overflow: hidden;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
const InforContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
  margin-top: 8px;
  padding: 0 4px;
  color: black;
`;
const ProductName = styled.div`
  width: 100%;
  display: -webkit-box;
  white-space: normal;
  line-height: 20px;
  min-height: 40px;
  max-height: 40px;
  overflow: hidden;
  font-size: 14px;
  font-weight: 600;
  -webkit-line-clamp : 2;
  -webkit-box-orient: vertical;
//   text-overflow: ellipsis;
  word-break: break-word;
`;
const Price = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 54px;
`;
const OriginPrice = styled.div`
  color: ${props => props.isDiscount ? 'rgba(0, 0, 0, 0.4)' : '#fa3d48'};
  font-size: ${props => props.isDiscount ? '16px' : '18px'};
  text-decoration: ${props => props.isDiscount ? 'line-through' : 'none'};
  font-weight: 600;
`;
const SalePrice = styled.div`
  display: ${props => props.isDiscount ? 'block' : 'none'};
  color: #fa3d48;
  font-size: 18px;
  font-weight: 600;
`;
const SoldInfo = styled.div`
  display: ${props => props.sold ? 'block' : 'none'}
`;
function Product(props) {
    const currencyFormat = new Intl.NumberFormat('vi-vn', {
        style: 'currency',
        currency: 'VND'
    })
    const discount = Math.round((props.item.price - props.item.newPrice) * 100 / props.item.price)
    return (
        <Container href={props.item.link} title={props.item.name}>
            <Discount isDisplay={props.item.newPrice}>-{discount}%</Discount>
            <ImageWrapper>
                <Image src={props.item.img} alt='test' />
            </ImageWrapper>
            <InforContainer>
                <ProductName>
                    {props.item.name}
                </ProductName>
                <Price>
                    <SalePrice
                        isDiscount={props.item.newPrice ? true : false}
                    >
                        {currencyFormat.format(props.item.newPrice)}
                    </SalePrice>
                    <OriginPrice
                        isDiscount={props.item.newPrice ? true : false}
                    >
                        {currencyFormat.format(props.item.price)}
                    </OriginPrice>
                </Price>
                <StarRatings
                    rating={props.item.rating}
                    starRatedColor='#f7b500'
                    numberOfStars={5}
                    starDimension='14px'
                    starSpacing='0'
                    title={props.item.rating}
                />
                <SoldInfo sold={props.item.sold}>
                    {props.item.sold} đã bán
                </SoldInfo>
            </InforContainer>
        </Container>
    )
}

export default Product