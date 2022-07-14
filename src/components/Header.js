import { Button, Image, Input } from 'antd'
import { useState } from 'react'
import {
	CustomeModal,
	HeaderContainer,
	HeaderMain,
	HeaderMainWrapper,
	HeaderTop,
	HeaderTopWrapper, IconContainer, IconWrapper,
	Logo,
	NotificationCounter,
	SearchContainer,
	TopSearch,
	UserContainer
} from './StyledComponent'

import logo from '../assets/logo.png'
import QR from '../assets/QR.png'

import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import '../App.scss'

export default function Header() {
	const [showQR, setShowQR] = useState(false)
	const [search, setSearch] = useState('')

	const { Search } = Input

	const handleHideModal = () => {
		setShowQR(false)
	}

	return (
		<HeaderContainer>
			<HeaderTop>
				<HeaderTopWrapper>
					<a href='foo' >KÊNH NGƯỜI BÁN</a>
					<a href='mailto:hotro@voso.vn'>HỖ TRỢ</a>
					<Button
						style={{
							backgroundColor: 'transparent',
							border: 'none',
							color: '#fff',
							fontWeight: 500,
							padding: 0,
							fontSize: 12
						}}
						onClick={() => setShowQR(true)}
					>TẢI ỨNG DỤNG
					</Button>
					<CustomeModal
						title='Scan Me'
						visible={showQR}
						onCancel={() => handleHideModal()}
						footer={
							[
								<Button
									type='primary'
									key='OK'
									onClick={() => handleHideModal()}
								>OK</Button>
							]
						}
					>
						<Image
							width={300}
							src={QR}
							preview={false}
						/>
					</CustomeModal>
				</HeaderTopWrapper>
			</HeaderTop>
			<HeaderMain>
				<HeaderMainWrapper>
					<Logo>
						<a
							href='foo'
						>
							<Image
								src={logo}
								preview={false}
							/>
						</a>
					</Logo>
					<SearchContainer>
						<Search
							size='large'
							placeholder='tìm sản phẩm, thương hiệu'
							allowClear
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							onSearch={() => { console.log(search); setSearch('') }}
							enterButton='Tìm kiếm'
						/>
						<TopSearch>
							<a href='foo'>Vai thieu</a>
							<a href='foo'>Mang cut cau ke</a>
							<a href='foo'>Trai cay</a>
							<a href='foo'>Bi thom Bac Kan</a>
							<a href='foo'>Rau cu</a>
							<a href='foo'>Gao</a>
							<a href='foo'>Banh keo</a>
						</TopSearch>
					</SearchContainer>
					<UserContainer>
						<IconContainer
							href='bar'
							style={{
								marginRight: '40px'
							}}
						>
							<IconWrapper>
								<ShoppingCartOutlined style={{ fontSize: '20px' }} />
								<NotificationCounter>10</NotificationCounter>
							</IconWrapper>
							<div>Giỏ hàng</div>
						</IconContainer>
						<IconContainer
							href='bar'
						>
							<IconWrapper>
								<UserOutlined style={{ fontSize: '20px' }} />
							</IconWrapper>
							<div>Dang nhap | Dang ky</div>
						</IconContainer>
					</UserContainer>
				</HeaderMainWrapper>
			</HeaderMain>
		</HeaderContainer>
	)
}
