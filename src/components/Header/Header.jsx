import { Button, Image, Input, Modal } from 'antd'
import { useState, useEffect } from 'react'
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import QR from '../../assets/QR.png'
import styled from "styled-components";
import IconWithNotification from './IconWithNotification/IconWithNotification'

export const HeaderContainer = styled.div`
	height: 162px;
	margin: 0;
	padding: 0;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const HeaderTopWrapper = styled.div`
	height: 32px;
	width: 100%;
	font-size: 12px;
	font-weight: 500;
	background: linear-gradient(176deg,#8AABFF 10.39%,#133FDB 96%);
	@media(max-width: 768px){
		display:none;
	}
	@media(min-width: 1200px){
		display: flex;
		justify-content: center;
	}
`;

export const HeaderTop = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 0 9px;
	& > a{
		margin-right: 20px;
		color: #fff;
		&:hover{
			color: rgba(255,255,255, 0.7);
		}
	}
	@media(min-width: 768p) and (max-width: 1199px){
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

export const HeaderMainWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-grow: 1;
	background: linear-gradient(170deg,#75B2FA -11.01%,#0965DF 83.14%);
	@media(min-width: 1200px){
		justify-content: center;
	}
`;

export const HeaderMain = styled.div`
	display: flex;
	flex-direction: row;
	height: 100%;
	width: 100%;
	align-items: center;
	padding: 24px 0;
	margin: 0 9px;
	@media(min-width: 1200px){
		width: 1200px;
	}
`;

export const LogoWrapper = styled.a`
	display: block;
	margin-right: 24px;
`;

export const Logo = styled.img`
	height: 100%;
	width: 100%;
`;

export const SearchContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	flex-grow: 1;
	justify-content: space-between;
`;

export const TopSearch = styled.div`
	display: flex block;
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
    margin-left: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

function Header() {
    const [showQR, setShowQR] = useState(false)
    const [input, setInput] = useState('')
    const [countItem, setCountItem] = useState(0)
    const [notification, setNotification] = useState(0)
    const [isLogin, setIsLogin] = useState(false);



    const { Search } = Input

    return (
        <Router>
            <HeaderContainer>
                <HeaderTopWrapper>
                    <HeaderTop>
                        <a href="foo">KÊNH NGƯỜI BÁN</a>
                        <a href="mailto:hotro@voso.vn">HỖ TRỢ</a>
                        <Button
                            style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                color: '#fff',
                                fontWeight: 500,
                                padding: 0,
                                fontSize: 12,
                            }}
                            onClick={() => setShowQR(true)}
                        >
                            TẢI ỨNG DỤNG
                        </Button>
                        <CustomeModal
                            title="Scan Me"
                            visible={showQR}
                            onCancel={() => {
                                setShowQR(false)
                            }}
                            footer={[
                                <Button
                                    type="primary"
                                    key="OK"
                                    onClick={() => {
                                        setShowQR(false)
                                    }}
                                >
                                    OK
                                </Button>,
                            ]}
                        >
                            <Image width={300} src={QR} preview={false} />
                        </CustomeModal>
                    </HeaderTop>
                </HeaderTopWrapper>
                <HeaderMainWrapper>
                    <HeaderMain>
                        <LogoWrapper href="/" target="_blank">
                            <Logo src={logo} />
                        </LogoWrapper>
                        <SearchContainer>
                            <Search
                                size="large"
                                placeholder="tìm sản phẩm, thương hiệu"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onSearch={() => {
                                    console.log(input)
                                    setInput('')
                                }}
                                enterButton="Tìm kiếm"
                            />
                            <TopSearch>
                                <a href="foo">Vải thiều</a>
                                <a href="foo">Măng cụt</a>
                                <a href="foo">Trái cây</a>
                                <a href="foo">Bí thơm Bắc Kạn</a>
                                <a href="foo">Rau củ</a>
                                <a href="foo">Gạo</a>
                                <a href="foo">Bánh kẹo</a>
                            </TopSearch>
                        </SearchContainer>
                        <UserContainer>
                            <IconWithNotification
                                icon={<ShoppingCartOutlined style={{ fontSize: 28 }} />}
                                notify={countItem}
                                content="Giỏ hàng"
                            />
                            <IconWithNotification
                                icon={<UserOutlined style={{ fontSize: 28 }} />}
                                notify={notification}
                                content="Đăng nhập / Đăng ký"
                            />
                        </UserContainer>
                    </HeaderMain>
                </HeaderMainWrapper>
            </HeaderContainer>
        </Router>
    )
}

export default Header
