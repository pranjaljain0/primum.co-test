"use client";

import Image from 'next/image'
import InputWrapper from './components/InputWrapper';
import { useState } from 'react';

export default function Home() {
  const [cardDetails, setCardDetails] = useState({
    Name: "",
    CardNumer: "",
    MM: "",
    YY: "",
    CVV: ""
  })

  const [showError, setShowError] = useState({
    Name: false,
    CardNumer: false,
    MM: false,
    YY: false,
    CVV: false
  })

  const handleInputChange = (e: any, type: string) => {
    setCardDetails({
      ...cardDetails, [type]: e.target.value
    })
  }

  return (
    <main className="flex min-h-screen items-center justify-between">
      <div className='flex flex-col flex-1 items-center justify-center min-h-screen w-full bg-[url(/bg-main-desktop.png)] bg-no-repeat'>
        <Image src={"/bg-card-front.png"} alt='card front' width={447} height={244} className='m-10' />
        <Image src={"/bg-card-back.png"} alt='card front' width={447} height={244} className='ml-20' />
      </div>
      <div className='flex flex-1 items-center justify-center h-full'>
        <form className='flex flex-col w-1/2'>
          <label className='text-lg'>CARDHOLDER NAME</label>
          <InputWrapper type="text" placeholder="Jane Doe" name="Name" handleInputChange={handleInputChange} />
          <label className='text-lg'>CARD NUMBER</label>
          <InputWrapper type="text" placeholder='1234 XXXX XXXX 1234' errorMessage="Wrong format, numbers only" name="CardNumer" handleInputChange={handleInputChange} showError={showError["CardNumer"]} />

          <div className='flex'>
            <div className='flex flex-col flex-1 pr-1'>
              <label>EXP. DATE (MM/YY)</label>
              <div className='flex'>
                <InputWrapper placeholder='MM' type="text" errorMessage="Can&apos;t be blank" name="MM" handleInputChange={handleInputChange} showError={showError["MM"]} />
                <InputWrapper placeholder='YY' type="text" errorMessage="Can&apos;t be blank" name="YY" handleInputChange={handleInputChange} showError={showError["YY"]} />
              </div>
            </div>

            <div className='flex flex-col flex-1'>
              <label>CVC</label>
              <InputWrapper placeholder='123' type="text" errorMessage="Can&apos;t be blank" name="CVV" handleInputChange={handleInputChange} showError={showError["CVV"]} />
            </div>
          </div>
          <button className='rounded p-3 bg-theme-violet text-white mt-4'>Confirm</button>
        </form>
      </div>
    </main >
  )
}
