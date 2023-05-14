import React, { useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { useEffect } from 'react';

const Container = styled.div`
  background-color: transparent;
  margin-left: 100px;
  display: block;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  & > span {
    font-weight: 700;
    font-size: 20px;
    padding-bottom: 6px;
  }
`;
const TimeWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  background-color: #c75520;
  color: #fff;
  font-weight: 600;
  text-align: center;
  justify-content: center;
  font-size: 18px;
  margin: 0 4px;
`;

function CountDown() {

    const calcDeadline = () => {
        const currentHour = moment().hour()
        const currentDate = moment().format("DD-MMMM-YYYY")
        if (currentHour >= 17) {
            return currentDate + ", 23:59:59"
        }
        if (currentHour >= 12) {
            return currentDate + ", 18:00:00"
        }
        if (currentHour >= 6) {
            return currentDate + ", 12:00:00"
        }
        else {
            return currentDate + ", 6:00:00"
        }
    }

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const timeRemain = moment(calcDeadline()).diff(moment())
        const timer = setInterval(() => {
            setHour(Math.floor(timeRemain / (1000 * 60 * 60)))
            setMinute(Math.floor(timeRemain / (1000 * 60) % 60))
            setSecond(Math.floor(timeRemain / 1000 % 60))
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    })

    return (
        <Container>
            <Wrapper>
                <TimeWrapper>{hour}</TimeWrapper>
                <span>:</span>
                <TimeWrapper>{minute < 10 ? '0' + minute : minute}</TimeWrapper>
                <span>:</span>
                <TimeWrapper>{second < 10 ? '0' + second : second}</TimeWrapper>
            </Wrapper>
        </Container>
    )
}

export default CountDown