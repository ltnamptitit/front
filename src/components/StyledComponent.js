import styled from "styled-components";

import { Modal } from "antd";

export const HeaderContainer = styled.div`
  height: 146px;
  margin: 0px;
  padding: 0px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1200px){
    min-height: 156px;
  }
`;

export const HeaderTop = styled.div`
  font-size: 12px;
  font-weight: 500;
  width: 100%;
  min-height: 32px;
  background: linear-gradient(176deg,#8AABFF 10.39%,#133FDB 96%);
  @media(max-width: 768px){
    display:none
  }
  @media(min-width: 1200px){
    display: flex;
    justify-content: center;
  }
`;

export const HeaderTopWrapper = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  // padding-left: 9px;
  margin: 0 9px;

  & > a{
    margin-right: 20px;
    color: rgb(255,255,255);
    &:hover{
      color: rgba(255,255,255, 0.8);
    }
  }

  @media(min-width: 768px & max-width: 1200px){
    width: 100%;
  }
  @media(min-width: 1200px){
    width: 1200px;
  } 
`;

export const CustomeModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QRContainer = styled.div`
  height: 300px;
`;

export const HeaderMain = styled.div`
  padding: 24px 0;
  flex-grow: 1;
  background: linear-gradient(170deg,#75B2FA -11.01%,#0965DF 83.14%);
  width: 100%;
  @media(min-width: 1200px){;
    display: flex;
    justify-content: center;
  }
`;

export const HeaderMainWrapper = styled.div`
  height: 100%;
  margin: 0 9px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media(min-width: 1200px){
    width: 1200px;
  } 
`;

export const Logo = styled.div`
  height: 100%;
  width: 140px;
  padding: 5px 0;
  margin-right: 20px;
  @media(max-width: 1200px){
    width: 102px;
  }
`;

export const SearchContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
`;

export const TopSearch = styled.div`
  display: flex;
  flex-direction: row;
  & > a{
    font-size: 12px;
    margin-right: 15px;
    color: rgb(255,255,255);
    &:hover{
      color: rgba(255,255,255, 0.6);
    }
  }
`;

export const UserContainer = styled.div`
  height: 100%;
  flex-grow: 0;
  margin-left: 40px;
  display: flex;
  flex-direction: row;
  @media(max-width: 768px){
    display:none
  }
`;

export const IconContainer = styled.a`
  min-height: 40px;
  display: flex;
  flex-direction: column;
  color: #fff;
  &:hover{
    color: rgba(255,255,255,0.6)
  }
`;

export const IconWrapper = styled.div`
  width: 26px;
  background-color: rgba(245, 245, 245, 0.2);
  display: flex;
  justify-content: center;
  border-radius: 6px;
  position: relative;
`;

export const NotificationCounter = styled.span`
  position: absolute;
  height: 16px;
  min-width: 16x;
  background-color: rgb(255,0,0);
  border-radius: 8px;
  font-size: 10px;
  padding: 0 3px;
  top: -8px;
  right: -8px;
`;