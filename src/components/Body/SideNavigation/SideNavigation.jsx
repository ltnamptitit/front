import { MenuOutlined, RightOutlined } from '@ant-design/icons'
import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

import Icon from '../Icon/Icon'
import Slider from '../Slider/Slider'

import bachhoa from '../../../assets/category/0f53ee50010327a8f71eeead5d90900a.png'
import giadung from '../../../assets/category/159cff7616282a19bf72a542251217a4.png'
import thietbiso from '../../../assets/category/26ec64943a0c20c61565ddc7d9bdffcb.png'
import suckhoe from '../../../assets/category/2dd47ec6a5f0d7c10c34d3e140ef70d0.png'
import ttnam from '../../../assets/category/4d4c2cfda7348ba4ff57ce2f776b257c.png'
import ttdl from '../../../assets/category/4e065b86b003b3129881fda6e7c3c105.png'
import nhapkhau from '../../../assets/category/4e8820a78f5b9a9cf4d7faab26b804f2.png'
import mebe from '../../../assets/category/66921592c67ea8d4b8ad2d4c10a2497a.png'
import dientu from '../../../assets/category/6d7cf6bb7b4916a126851cbb498c0845.png'
import ttnu from '../../../assets/category/8399296911e4aceca8743c20a58de7b7.png'
import dacsan from '../../../assets/category/aa20579659ff44918fd9d708a094e30c.png'
import oto from '../../../assets/category/cd419fac21eb09c658f7ee5b05768d2a.png'
import thucong from '../../../assets/category/f5bad36f56bbba3d8b1564c3be1a8234.png'
// import cokhi from '../../../assets/category/3fd0fd33e041b058d5142cbed1697d43.png'
// import voucher from '../../../assets/category/915a952bc75390ff5a1772f39c221656.png'
// import vatlieu from '../../../assets/category/ae0f26fa67d5ce6f09e05042e41cd633.png'
// import vattu from '../../../assets/category/350b6b0f143f7212d4dab55aae8bd8a6.png'

import sl1 from '../../../assets/slider/1ccbbb08f8bfe16aae16c8617cf918f3.jpg'
import sl2 from '../../../assets/slider/3fb52438080f667a7328a3fa809e419e.jpg'
import sl3 from '../../../assets/slider/b163ff2cdde6ad544eced1f2ef15635c.jpg'
import sl4 from '../../../assets/slider/bf5dce41734b9d6ed9fae66ca7d8fdba.jpg'
import sl5 from '../../../assets/slider/c58c0dcd6d80a386d79b5d4c8abac6a6.jpg'
import sl6 from '../../../assets/slider/c5a2596093a5dc01aa7497733e19e682.jpg'
import sl7 from '../../../assets/slider/c5f48c3538aead5cd25c2ca9bd48a0e4.jpg'
import sl8 from '../../../assets/slider/d92f423f0d48cdda09fcc5984aa8afae.jpg'
import TitleComponent from '../TitleComponent/TitleComponent'

const Container = styled.div`
  margin: 16px 0;
  padding: 8px;
  height: 310px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`
const CategoryWrapper = styled.div`
  height: 100%;
  width: 250px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
`
const Category = styled.div`
  height: 248px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
`
const CategoryMenu = styled.nav`
  height: 100%;
  width: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  &::-webkit-scrollbar {
	width: 3px;
  }
  &::-webkit-scrollbar-thumb {
	background-color: #237df3;
  }
`
const SubMenuWrapper = styled.nav`
  width: 250px;
  position: absolute;
  background-color: #fff;
  border: 1px solid rgba(100, 100, 100, 0.3);
  top: 0px;
  left: 100%;
  z-index: 2;
  display: none;
`
const MainCategory = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  color: rgba(0, 0, 0, 0.8);
  &:hover {
	color: rgba(0, 0, 0, 0.8);
	background-color: rgba(0, 145, 255, 0.1);
    ${SubMenuWrapper}{
        display: block;
    }
  }
`
const MainCategoryContent = styled.div`
  display: block;
  flex-grow: 1;
  padding-left: 16px;
`
const RightArrow = styled.div`
  margin-right: 10px;
`
const SubMenuItem = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  color: rgba(0, 0, 0, 0.8);
  padding-left: 10px;
  &:hover {
	color: rgba(0, 0, 0, 0.8);
	background-color: rgba(0, 145, 255, 0.1);
  }
`

function SliderNavigation() {
	const mainMenu = [
		{
			main: {
				content: 'Sàn đặc sản',
				link: 'foorba',
				image: dacsan,
			},
			sub: [
				'Đặc sản miền Bắc',
				'Đặc sản miền Trung',
				'Đặc sản miền Tây',
				'Đặc sản miền Nam',
				'Đặc sản miền Tây Nguyên',
				'Đặc sản trái cây',
			],
		},
		{
			main: {
				content: 'Bách hóa',
				link: 'bachhoa',
				image: bachhoa,
			},
			sub: [
				'Phòng bếp',
				'Phòng tắm và nhà vệ sinh',
				'Phòng khách',
				'Phòng ngủ',
				'Ngoài nhà',
				'Khác',
			],
		},
		{
			main: {
				content: 'Thiết bị điện tử',
				link: 'dientu',
				image: dientu,
			},
			sub: [
				'Điện thoại di động',
				'Máy tính bảng',
				'Laptop',
				'Máy tính để bàn',
				'Thiết bị số',
				'Âm thanh',
				'Máy chơi game',
				'Camera hành động - máy quay',
				'Camera giám sát',
				'Camera kỹ thuật số',
				'Thiết bị điện tử khác',
			],
		},
		{
			main:{
				content: 'Sức khỏe & Làm đẹp',
				link: 'skld',
				image: suckhoe,
			},
			sub:[
				'Trang điểm',
				'Chăm sóc da',
				'Chăm sóc tóc',
				'Dụng cụ làm đẹp',
				'Nước hoa',
				'Thực phẩm chức năng',
				'Chăm sóc cơ thể',
				'Chăm sóc cho nam giới',
				'Thiết bị y tế',
				'Chăm sóc cá nhân',
			]
		},
		{
			main:{
				content: 'Điện gia dụng',
				link: 'giadung',
				image: giadung,
			},
			sub:[
				'Tivi',
				'Điện lạnh',
				'Thiết bị điện gia dụng',
				'Điện gia dụng nhà bếp',
				'Máy hút bụi & Vệ sinh',
				'Máy ủi & máy may',
				'Dàn âm thanh gia đình',
				'Điều hòa & lọc không khí',
				'Lắp đặt và bảo trì',
			]
		},
		{
			main:{
				content: 'Phụ kiện thiết bị số',
				link: 'tbso',
				image: thietbiso,
			},
			sub:[
				'Phụ kiện điện thoại',
				'Phụ kiện điện tử',
				'Thiết bị mạng',
				'Thiết bị số',
				'Thiết bị lưu trữ',
				'Phụ kiện máy tính',
				'Phụ kiện máy chơi game',
				'Linh kiện máy tính',
				'Thiết bị đeo',
				'Máy in & Scan',
				'Phụ kiện khác',
			]
		},
		{
			main:{
				content: 'Mẹ & Bé',
				link: 'mebe',
				image: mebe,
			},
			sub:[
				'Sữa',
				'Đồ chơi cho bé',
				'Thời trang & phụ kiện cho bé',
				'Đồ dùng cho mẹ',
				'Tắm gội cho bé',
				'Chăm sóc trẻ sơ sinh, trẻ nhỏ',
				'Quần áo & Phụ kiện Mẹ Bé',
				'Xe, Ghế, Địu & Nôi',
				'Tã & Dụng cụ vệ sinh',
			]
		},
		{
			main:{
				content: 'Thời trang nam',
				link: 'ttnam',
				image: ttnam,
			},
			sub:[
				'Trang phục nam',
				'Giày nam',
				'Đồ lót nam',
				'Túi xách nam',
				'Phụ kiện nam',
				'Trang phục bé trai',
				'Giày bé trai',
				'Túi & balo bé trai',
				'Phụ kiện bé trai',
			]
		},
		{
			main:{
				content: 'Thời trang nữ',
				link: 'ttnu',
				image: ttnu,
			},
			sub:[
				'Trang phục nữ',
				'Giày nữ',
				'Túi xách nữ',
				'Phụ kiện nữ',
				'Đồ ngủ & nội y',
				'Trang phục bé gái',
				'Giày bé gái',
				'Túi & balo bé gái',
				'Phụ kiện bé gái',
			]
		},
		{
			main:{
				content: 'Thể thap & Du lịch',
				link: 'ttdl',
				image: ttdl,
			},
			sub:[
				'Gym - Yoga - Fitness',
				'Thực phẩm bổ sung năng lượng',
				'Thời trang thể thao nam',
				'Thời trang thể thao nữ',
				'Vali & Túi du lịch',
				'Vé máy bay',
				'Phụ kiện thể thao',
			]
		},
		{
			main:{
				content: 'Ô tô & Xe máy',
				link: 'otoxemay',
				image: oto,
			},
			sub:[
				'Ô tô',
				'Xe máy',
				'Phụ kiện & Dịch vụ ô tô',
				'Phụ kiện & Dịch vụ xa máy',
			]
		},
		{
			main:{
				content: 'Hàng nhập khẩu',
				link: 'nhapkhau',
				image: nhapkhau,
			},
			sub:[
				'Đồ dùng nhà bếp',
				'Sữa',
				'Thời trang nam nhập khẩu',
				'Thời trang nữ nhập khẩu',
				'Đồ dùng gia đình nhập khẩu',
			]
		},
		{
			main:{
				content: 'Thu cong my nghe',
				link: 'thucong',
				image: thucong,
			},
			sub:[
				'Đồ gỗ',
				'Mây, tre, cói',
				'Mệt may',
				'Gốm, sứ',
				'Giấy',
				'Thêu, ren',
				'Kim khí mỹ nghệ',
				'Tranh, ảnh nghệ thuật',
				'Đồ dùng khác',
			]
		},
	]
	const slider = [
		{
			link: '/barom',
			src: sl1,
		},
		{
			link: '/barom',
			src: sl2,
		},
		{
			link: '/barom',
			src: sl3,
		},
		{
			link: '/barom',
			src: sl4,
		},
		{
			link: '/barom',
			src: sl5,
		},
		{
			link: '/barom',
			src: sl6,
		},
		{
			link: '/barom',
			src: sl7,
		},
		{
			link: '/barom',
			src: sl8,
		},
	]
	return (
		<Container>
			<CategoryWrapper>
				<TitleComponent
					height="50px"
					icon={<MenuOutlined style={{ color: '#fff', fontSize: '14px' }} />}
					title="Danh mục"
				/>

				<Category>
					<CategoryMenu>
						{mainMenu.map((mainMenuItem) => {
							return (
								<MainCategory href="foo" key={uuidv4()}>
									<Icon img={mainMenuItem.main.image} dimension="28px" />
									<MainCategoryContent>{mainMenuItem.main.content}</MainCategoryContent>
									<RightArrow>
										<RightOutlined />
									</RightArrow>
                                    <SubMenuWrapper>
                                        {
                                            mainMenuItem.sub.map(subMenuItem => {
                                                return <SubMenuItem href="barr11" key={uuidv4()}>
                                                    {subMenuItem}
                                                </SubMenuItem>
                                            })
                                        }
                                    </SubMenuWrapper>
								</MainCategory>
							)
						})}
					</CategoryMenu>
				</Category>
			</CategoryWrapper>
			<Slider bannerArray={slider} />
		</Container>
	)
}

export default SliderNavigation
