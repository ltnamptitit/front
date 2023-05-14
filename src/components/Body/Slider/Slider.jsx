import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid'



const SliderComponent = styled.div`
  height: ${props => props.height || '100%'};
  width: ${props => props.width || '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 8px;
  `;

const Arrow = styled.button`
  position: absolute;
  display: none;
  background: ${props => props.isRight === 'true' ? 'linear-gradient(-90deg, rgba(212,212,212,0.4) 0%, rgba(99,99,99,0) 100%)' : 'linear-gradient(90deg, rgba(212,212,212,0.4) 0%, rgba(99,99,99,0) 100%)'};
  outline: none;
  border: 0px;
  height: 100%;
  width: 40px;
  top: 0px;
  z-index: 1;
  left: ${props => props.isRight === 'true' ? `calc(100% - 40px)` : '0px'};
`;

const DotNavigation = styled.div`
  position: absolute;
  display: flex;
  z-index: 1;
  width: 100%;
  height: 24px;
  bottom: 0px;
  justify-content: center;
  align-items: center;
`;

const SliderWrapper = styled.div`
  position: relative;
  height: 100%;
  flex-grow: 1;
  background-color: #fff;
  &:hover{
    ${Arrow}{
        display: inline-block;
    }
  }
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: ${props => props.isActive === 'true' ? 'block' : 'none'}
`;

const DotWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 4px;
  height: 12px;
  width: calc(${props => props.widthDot * 15}px);
  background-color: rgba(50,50,50,0.6);
  box-shadow: 0 0 5px #fff;
  border-radius: 6px;
`;

const Dot = styled.button`
  border: none;
  outline: none;
  padding: 4px;
  background: 0 0;
  &>span{
      display: block;
      padding: 0;
      margin: 0;
      height: 6px;
      width: 6px;
      border-radius: 50%;
      background-color: ${props => props.isActive === 'true' ? '#fff' : 'rgba(204, 194, 142, 0.5)'};
  }
`;

function Slider(props) {
    const [currentImg, setCurrentImg] = useState(0)
    const [ishover, setIshover] = useState(false)
    const forward = (currentImg) => {
        if (currentImg === props.bannerArray.length - 1) {
            setCurrentImg(0)
            return
        }
        setCurrentImg(currentImg + 1)
        return
    }
    const backward = (currentImg) => {
        if (currentImg === 0) {
            setCurrentImg(props.bannerArray.length - 1)
            return
        }
        setCurrentImg(currentImg - 1)
        return
    }
    useEffect(() => {
        if (!ishover) {
            let slider = setInterval(() => {
                forward(currentImg)
            }, 3000);
            return () => clearInterval(slider)
        }

    }, [currentImg, ishover])


    return (
        <SliderComponent
            height={props.height}
            width={props.width}
            onMouseEnter={() => setIshover(true)}
            onMouseLeave={() => setIshover(false)}
        >
            <SliderWrapper>
                {
                    props.bannerArray.map((image, index) => {
                        return (
                            <a href={image.link} key={uuidv4()}>
                                <StyledImage
                                    src={image.src}

                                    alt={index}
                                    isActive={currentImg === index ? 'true' : 'false'}
                                />
                            </a>
                        )
                    })
                }
                <Arrow isRight='true' onClick={() => forward(currentImg)}>
                    <RightOutlined style={{ fontSize: '14px' }} />
                </Arrow>
                <Arrow isRight='flase' onClick={() => backward(currentImg)}>
                    <LeftOutlined style={{ fontSize: '14px' }} />
                </Arrow>
                <DotNavigation>
                    <DotWrapper widthDot={props.bannerArray.length}>
                        {
                            props.bannerArray.map((img, index) => {
                                return <Dot
                                    key={uuidv4()}
                                    isActive={currentImg === index ? 'true' : 'false'}
                                    onClick={() => setCurrentImg(index)}
                                >
                                    <span></span>
                                </Dot>
                            })
                        }
                    </DotWrapper>
                </DotNavigation>
            </SliderWrapper>
        </SliderComponent>
    )
}

export default Slider;