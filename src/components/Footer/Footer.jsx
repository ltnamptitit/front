import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo_ft.png'
import { Button, Input } from 'antd'




const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  `;
const SubcribeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
//   background-color: #0394f5;
  `;
const SubcribeWrapper = styled.div`
  max-width: 1200px;
  width: 1200px;
  display: flex;
  justify-content: flex-start;
`;
const LogoContainer = styled.div`
  height: 75px;
  width: 100px;
  margin-right: 20px;
`;
const Logo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
const AdviseContainer = styled.div`
display: flex;
  font-size: 16px;
  font-weight: 600;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  flex-directtion: row;
  justify-content: space-between;
`;
const InputContainer = styled.div`
  display: flex;
  max-width: 800px;
  width: 500px;
`;
const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #0394f5;
  
`;
const AboutWrapper = styled.div`
  width: 1200px;
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const About = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & > a{
    font-size: 12px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 6px;
  }
`;
const Title = styled.span`
  color: #fff;
  font-size: 16px;
  margin-bottom: 20px;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 8px;
`;
const Subtitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: white;
`;
const Info = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: white;
`;
const AuthenticationContainer = styled.div`
  
`;

const submitEmailSubcribe = (email) => {
    alert(email)
}


function Footer() {
    const [email, setEmail] = useState('');
    return (
        <FooterContainer>
            <SubcribeContainer>
                <SubcribeWrapper>
                    <LogoContainer>
                        <Logo src={logo} />
                    </LogoContainer>
                    <AdviseContainer>
                        <span>
                            Bạn muốn nhận thông tin ưu đãi từ chúng tôi?
                        </span>
                        <InputContainer>
                            <Input
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <Button
                                type='primary'
                                onClick={() => submitEmailSubcribe(email)}
                            >Xác nhận</Button>
                        </InputContainer>
                    </AdviseContainer>

                </SubcribeWrapper>
            </SubcribeContainer>
            <AboutContainer>
                <AboutWrapper>
                    <About>
                        <Title>VỀ CHÚNG TÔI</Title>
                        <a href='demo1'>Giới thiệu về Viettel</a>
                        <a href='demo1'>Giới thiệu về Voso</a>
                        <a href='demo1'>Cơ hội hợp tác</a>
                        <a href='demo1'>Quy chế hoạt động</a>
                        <a href='demo1'>Quy định đóng gói hàng hóa</a>
                        <a href='demo1'>Quy định hàng hóa cấm gửi</a>
                        <a href='demo1'>Điều khoản sủ dụng</a>
                        <a href='demo1'>Chính sách bảo mật</a>
                    </About>
                    <About>
                        <Title>HỖ TRỢ</Title>
                        <a href='demo1'>Hướng dẫn đặt hàng</a>
                        <a href='demo1'>Bán hàng cùng Voso</a>
                        <a href='demo1'>Quy trình mua bán</a>
                        <a href='demo1'>Giải quyết khiếu nại</a>
                        <a href='demo1'>Chính sách đổi trả hàng</a>
                        <a href='demo1'>Chính sách thanh toán</a>
                        <a href='demo1'>Chính sách vận chuyển</a>
                    </About>
                    <About>
                        <Title>KẾT NỐI VỚI CHÚNG TÔI</Title>
                        <Contact>
                            <Subtitle>
                                Địa chỉ
                            </Subtitle>
                            <Info>
                                Tòa nhà N2, Km số 2, Đại lộ Thăng Long, Mễ Trì, Q. Nam Từ Liêm, Hà Nội
                            </Info>
                        </Contact>
                        <Contact>
                            <Subtitle>
                                Hotline
                            </Subtitle>
                            <Info>
                                1900 98 98 88
                            </Info>
                        </Contact>
                        <Contact>
                            <Subtitle>
                                Email
                            </Subtitle>
                            <Info>
                                hotro@voso.vn
                            </Info>
                        </Contact>
                    </About>
                    <About>

                    </About>
                </AboutWrapper>
            </AboutContainer>
            <AuthenticationContainer>

            </AuthenticationContainer>
        </FooterContainer>
    )
}

export default Footer
