import React from 'react'
import Header from './components/Header/Header'
import 'antd/dist/antd.min.css'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'

export default function App() {

    return (
        <div className='App' style={{ backgroundColor: '#f1f1f1' }}>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

