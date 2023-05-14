import React from 'react';
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import Box from './Box/Box';
import FlashSale from './FlashSale/FlashSale';
import Service from './Service/Service';
import SideNavigation from './SideNavigation/SideNavigation';


import banner from '../../assets/c539034e46ee0aaa51b465de1348c169.jpg';

import banner1 from '../../assets/banner/9bce0a1ab05e17851ff7b9389e53ea73.jpg';
import banner2 from '../../assets/banner/8028fcfeb1ee041762b04610ff69e090.jpg';
import banner3 from '../../assets/banner/ede4faebc1d8f6d9e3bf5575f71e1748.jpg';
import banner4 from '../../assets/banner/f9230fc79856e37bd3260a7637d317c3.jpg';
import banner5 from '../../assets/banner/70732012113a75345a982082ddf2d9d6.jpg';
import banner6 from '../../assets/banner/da71bf9f4157a5cdcfec4edbf58968fd.jpg';
import banner7 from '../../assets/c771ca433979c30274f14e40e390d7cf.png'
import banner8 from '../../assets/737106e8c21ad1a3c61c27834658e283.png'
import banner9 from '../../assets/6dbeb62e57c6837f5cc54c4e1b2ec77d.png'

import imgDS6 from '../../assets/product/dacsan/0814a9ca6be575105beb13da9b088997.jpg';
import imgDS5 from '../../assets/product/dacsan/0d67e66dda4e11c13d4f820d147a0a1a.jpg';
import imgDS7 from '../../assets/product/dacsan/1085c6b6a1a5b18b3c3588895cb18bdb.jpg';
import imgDS8 from '../../assets/product/dacsan/1605cf4f7ba3eb5ae8029c59d6fe155f.jpg';
import imgDS9 from '../../assets/product/dacsan/191422fad630ee5a58f6d5702362b7df.jpg';
import imgDS10 from '../../assets/product/dacsan/21295c9bf68423c3fbb3e2ff1ec97c76.jpg';
import imgDS11 from '../../assets/product/dacsan/29e68baaf6aa43e3fbef1ad1ab7677b7.jpg';
import imgDS12 from '../../assets/product/dacsan/2ad0ea69e06a9498f6696be2991bb2f1.jpg';
import imgDS13 from '../../assets/product/dacsan/3371170abbf194b013e45faa3021d737.jpg';
import imgDS3 from '../../assets/product/dacsan/42dfb151595d0e579a2e6e1d7e9b370e.jpg';
import imgDS4 from '../../assets/product/dacsan/577ae7730bad90495ff919422256cd6f.jpg';
import imgDS16 from '../../assets/product/dacsan/68c9351b23bf7e95dfd3e6c4b0b3dd7d.jpg';
import imgDS14 from '../../assets/product/dacsan/9e1d34f05af74116f63381a57a1fe5f2.jpg';
import imgDS1 from '../../assets/product/dacsan/ce9c7311d2279972ca72fe6ca43f65da.jpg';
import imgDS15 from '../../assets/product/dacsan/ee459f578500d4917ce0cfca27cb3312.jpg';
import imgDS2 from '../../assets/product/dacsan/ef2ce3188bad4bd40bec6c8192ca2b63.jpg';

import imgOCOP1 from '../../assets/product/OCOP/05a3e11ab50ed84d11784167bcbb6ccf.jpg';
import imgOCOP2 from '../../assets/product/OCOP/1634493e4da79a6a6b4a1e6de9da1735.jpg';
import imgOCOP3 from '../../assets/product/OCOP/25affdb73a446a65e6b96a796092b639.jpg';
import imgOCOP4 from '../../assets/product/OCOP/83a68aa2c6b499ef6ab033947bd10563.jpg';
import imgOCOP5 from '../../assets/product/OCOP/8baa575a70f99a417771b60b524e416a.jpg';
import imgOCOP6 from '../../assets/product/OCOP/9414113c7259834b5b285ac45e03828b.jpg';
import imgOCOP7 from '../../assets/product/OCOP/95f34096f75c77157ca0ca96cc458433.jpg';
import imgOCOP8 from '../../assets/product/OCOP/9619bea91607ae65c32cec0e503b66ca.jpg';
import imgOCOP9 from '../../assets/product/OCOP/9bcb072e02405af79420e2a9df089a92.jpg';
import imgOCOP10 from '../../assets/product/OCOP/a66f2223275ea55f90ee027b4c055b35.jpg';
import imgOCOP11 from '../../assets/product/OCOP/d5dda94cbec22b111b442acfb40f7009.jpg';
import imgOCOP12 from '../../assets/product/OCOP/e7f2ab4b771ec75b78523576514bd672.jpg';
import { HeartFilled } from '@ant-design/icons';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  align-items: center;
`;

const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  @media(min-width: 1200px){
    width: 1200px;
    margin: auto;
  }
  @media(max-width: 1199px){
    width: 100%;
  }
`;

const Banner = styled.img`
  margin-bottom: 20px;
  width: 100%;
`;

const MultiBanner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 20px;
`;
const BannerContainer = styled.div`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;


function Body() {
    class Item {
        constructor(link, img, name, price, newPrice, rating, sold, quantity, soldInFlashSale) {
            this.link = link;
            this.img = img;
            this.name = name;
            this.price = price;
            this.newPrice = newPrice ? newPrice : 0;
            this.rating = rating ? rating : 0;
            this.sold = sold;
            this.quantity = quantity;
            this.soldInFlashSale = soldInFlashSale;
            this.id = uuidv4()
        }
    }
    const productsDS = [
        new Item('/product1', imgDS1, 'Na Chi Lăng size từ 3-4-5 quả / kg (10kg)', 350000, 300000, 4.3, 200, 100, 99),
        new Item('/product2', imgDS2, 'Gạo Nương KonTum 10kg', 200000, 180000, 4.4, 179, 400, 50),
        new Item('/product3', imgDS3, 'Cá kho làng Vũ Đại nồi 2kg (Chỉ giao miền Bắc) free ship nè', 600000, 0, 0, 79, 500, 20),
        new Item('/product4', imgDS4, 'Gạo Phúc Thọ đen 1kg Vinaseed', 61000, 60000, 0, 100, 300, 50),
        new Item('/product5', imgDS5, 'Combo 10 quả nem bùi Bắc Ninh', 300000, 250000, 0, 123, 200, 100),
        new Item('/product6', imgDS6, 'Vịt quay Lạng Sơn', 280000, 250000, 0, 123, 350, 50),
        new Item('/product7', imgDS7, 'Ổi Quang Thuận', 80000, 64000, 0, 1234, 200, 0),
        new Item('/product8', imgDS8, '10kg bưởi da xanh ruột hồng Bến Tre', 450000, 400000, 0, 43, 100, 20),
        new Item('/product9', imgDS9, 'Chôm chôm đầu mùa', 480000, 0, 0, 0, 150, 0),
        new Item('/product10', imgDS10, 'Yến xào Kon Tum', 250000, 225000, 0, 0, 100, 0),
        new Item('/product11', imgDS11, 'Miến rau củ 500g - HTX Đông Triều', 85000, 80000, 0, 0, 175, 0),
        new Item('/product12', imgDS12, '500g thịt trâu sấy (OCOP) - Đặc sản Yên Bái', 500000, 425000, 5, 16, 320, 10),
        new Item('/product13', imgDS13, 'Đặc sản chè Tân Cương Thái Nguyên (túi 0,5kg)', 600000, 580000, 0, 46, 500, 20),
        new Item('/product14', imgDS14, 'Hạt Sachi nhân trắng sấy giòn 100g', 64000, 49000, 0, 0, 120, 0),
        new Item('/product15', imgDS15, 'Mực rim Thúy Trinh đặc sản Bình Định', 120000, 98000, 5, 4, 150, 2),
        new Item('/product16', imgDS16, 'Kẹo dừa nướng dứa đậu phộng (ít đường)', 150000, 139000, 5, 1, 100, 0),
    ]
    const productsOCOP = [
        new Item('/product/tacumin', imgOCOP1, 'Tacumin 600g - Đặc sản ong Tam Đảo Vĩnh Phúc', 678000, 0, 4.9, 64),
        new Item('/product/lap-xuong-mai-que-lo', imgOCOP2, 'Lạp xưởng Mai Quế Lộ - Quãng Trân (1kg)', 400000, 350000, 5, 114),
        new Item('/product/banh-phong-tom-dat-nacama', imgOCOP3, 'Bánh phồng tôm đất Nacama', 130000, 0, 0, 2),
        new Item('/product/hat-dieu-rang-muoi-thinh-phat', imgOCOP4, 'Hạt điều rang muối Thịnh Phát (1kg)', 300000, 260000, 0, 51),
        new Item('/product/mien-toi-den', imgOCOP5, 'Miến tỏi đen Việt Cường', 200000, 80000, 0, 0),
        new Item('/product/cao-mem-atiso', imgOCOP6, 'OCOP.4.LCI. CAO MỀM ACTISO SA PA - Giải độc, Bảo vệ Gan', 200000, 0, 0, 70),
        new Item('/product/banh-trang-chum-ngay-morice', imgOCOP7, 'Bánh tráng chùm ngây Morice 250g/túi', 120000, 95000, 0, 52),
        new Item('/product/combo-2-hop-tra-tui-loc', imgOCOP8, 'Combo 2 Hộp Trà Túi Lọc Cà Gai Leo SP Ocop 3 Sao Tỉnh Hoà Bình - Chỉ 138.000Đ/2 Hộp', 138000, 0, 5, 13),
        new Item('/product/sua-tuoi-thanh-trung-muc-dong-500ml', imgOCOP9, 'Sữa tươi thanh trùng mục đồng 500ml', 80000, 60000, 0, 55),
        new Item('/product/gio-tai-vuong-an', imgOCOP10, 'Giò tai Vương An', 135000, 120000, 0, 35),
        new Item('/product/dong-trung-ha-thao', imgOCOP11, 'Đông trùng hạ thảo Bảo Khang dạng bột 100g đóng gói - sản phẩm OCOP', 250000, 220000, 0, 52),
        new Item('/product/combo-6-qua-buoi-tan-my', imgOCOP12, 'Combo 6 Quả Bưởi Tân Mỹ SP Ocop 3 Sao Hòa Bình', 300000, 240000, 0, 22)
    ]
    const bannersDS = [
        {
            link: '/banner1',
            src: banner1
        },
        {
            link: '/banner2',
            src: banner2
        },
        {
            link: '/banner3',
            src: banner3
        },
        {
            link: '/banner4',
            src: banner4
        }
    ]
    const bannersOCOP = [
        {
            link: '/banner5',
            src: banner5
        },
        {
            link: '/banner6',
            src: banner6
        }
    ]
    return (
        <Container>
            <WrapperBody>
                <SideNavigation />
                <Service />
                <Banner src={banner} />
                <FlashSale
                    product={productsDS}
                    link={'/flash-sale'}
                />
                <Box
                    title='Siêu hội đặc sản'
                    banner={bannersDS}
                    product={productsDS}
                    link={'/dac-san'}
                />
                <Box
                    title='Sản phẩm OCOP'
                    link={'/OCOP'}
                    banner={bannersOCOP}
                    product={productsOCOP}
                />
                <MultiBanner>
                    <BannerContainer>
                        <img src={banner7} alt='' />
                    </BannerContainer>
                    <BannerContainer>
                        <img src={banner8} alt='' />
                    </BannerContainer>
                    <BannerContainer>
                        <img src={banner9} alt='' />
                    </BannerContainer>
                </MultiBanner>
                <Box
                    title='Sản phẩm được yêu thích'
                    icon={<HeartFilled style={{ fontSize: '20px', color: 'rgba(255, 0, 0, 0.8)' }} />}
                    link={'/favourite'}
                    product={productsOCOP}
                />
            </WrapperBody>
        </Container>
    )
}

export default Body



