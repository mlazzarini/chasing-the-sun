'use client'
import { amaticSC } from '@/app/styles/fonts'
import React, { FunctionComponent, useEffect, useState } from 'react'

const Countdown: FunctionComponent = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-04-30') - +new Date()
    let timeLeft: any = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents: JSX.Element[] = []

  Object.keys(timeLeft).forEach((interval: string) => {
    if (!timeLeft[interval]) {
      return <span>0 {interval}</span>
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    )
  })

  return (
    <div className="text-center text-2xl">
      <div
        className={`${amaticSC.className} font-bold text-4xl text-[#FF4E50] mb-8`}>
        Countdown 🚀
      </div>
      {timerComponents.length ? timerComponents : <span>Time is up!</span>}
    </div>
  )
}

export default Countdown
