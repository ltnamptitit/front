import { AppstoreFilled } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';
import TitleComponent from '../TitleComponent/TitleComponent';
import ServiceItem from './ServiceItem';

import imageServiceOCOP from '../../../assets/services/09580b3b3455aa9035c4ebd45501a462.png'
import imageServiceFlight from '../../../assets/services/7b478a21e078a7a11dcd6484091e49ad.png'
import imageServiceWholesale from '../../../assets/services/1ca66672f5d86910c978d0924c5edc00.png'
import imageServiceMaintenance from '../../../assets/services/341fe6098c02c41ea85283d0a0e8623e.jpg'
import imageServiceAffiliate from '../../../assets/services/e2540359972d1ac589aa11131f0fd010.png'
import imageServiceMall from '../../../assets/services/f14891cded04bed1b4958a06621761e7.png'

const serviceItems = [
    {
        image: imageServiceMall,
        content: 'Voso Mall',
        link: '/mall',
        id: '123'
    },
    {
        image: imageServiceWholesale,
        content: 'Mua sỉ',
        link: '/mua-si',
        id: '124'
    },
    {
        image: imageServiceFlight,
        content: 'Vé máy bay',
        link: '/ve-may-bay',
        id: '125'
    },
    {
        image: imageServiceOCOP,
        content: 'Gian hàng OCOP',
        link: '/ocop',
        id: '126'
    },
    {
        image: imageServiceAffiliate,
        content: 'Affiliate',
        link: '/affiliate',
        id: '127'
    },
    {
        image: imageServiceMaintenance,
        content: 'Dịch vụ kỹ thuật tại nhà',
        link: '/maintenance',
        id: '128'
    }
]

const ServicesContainer = styled.div`
  width: 100%;
  padding-left:  8px;
  padding-right: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
`;
const Services = styled.div`
  display: flex;
  height: 100%;
  flex-grow: 1;
  align-items: center;
  border-left: 1px solid rgba(0,0,0,0.2);
  padding-left:  8px;
  padding-right: 8px;
  justify-content: space-between;
`;

function Service() {
    return (
        <ServicesContainer>
            <TitleComponent
                width='250px'
                icon={<AppstoreFilled style={{ color: '#fff', fontSize: '14px' }} />}
                title='Dịch vụ, tiện ích'
            />
            <Services>
                {/* <ServiceItem src={imageService} content='hello' size='40px' /> */}
                {
                    serviceItems.map(item => {
                        return <ServiceItem
                            key={item.id}
                            link={item.link}
                            src={item.image}
                            content={item.content}
                            size='40px'
                        />
                    })
                }
            </Services>
        </ServicesContainer>
    )
}

export default Service