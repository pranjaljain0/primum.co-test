"use client";

import { formatCreditCardDate, formatCreditCardNumber } from './helpers/helper';

import { CardDetails } from './helpers/interfaces';
import CardDetailsInputForm from './components/CardDetailsInputForm';
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [correctCardDetails, setCorrectCardDetails] = useState(false)
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    Name: "",
    CardNumer: "",
    MM: "",
    YY: "",
    CVV: ""
  })


  return (
    <main className="flex min-h-screen items-center justify-between font-sans">
      <div className='flex flex-col flex-1 items-center justify-center min-h-screen w-full bg-[url(/bg-main-desktop.png)] bg-no-repeat'>
        <div className='relative'>
          <Image src="/card-logo.svg" alt="Some" width={80} height={80} className='absolute top-[50px] left-[50px]' />
          <Image src={"/bg-card-front.png"} alt='card front' width={447} height={244} className='m-10' />
          <span className='absolute bottom-[150px] right-[150px] text-white text-2xl'>{formatCreditCardNumber(cardDetails.CardNumer)}</span>
          <span className='absolute bottom-[90px] right-[100px] text-white'>{formatCreditCardDate(cardDetails.MM, cardDetails.YY)}</span>
          <span className='absolute bottom-[90px] left-[80px] text-white'>{cardDetails.Name.length != 0 ? cardDetails.Name : "John Doe"}</span>
        </div>
        <Image src={"/bg-card-back.png"} alt='card front' width={447} height={244} className='ml-20' />
      </div>
      <div className='flex flex-1 items-center justify-center h-full'>
        {!correctCardDetails ? <CardDetailsInputForm cardDetails={cardDetails} setCardDetails={setCardDetails} setCorrectCardDetails={setCorrectCardDetails} /> : <h1>Correct details</h1>}
      </div>
    </main >
  )
}
